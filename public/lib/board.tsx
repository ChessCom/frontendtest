import { defineComponent, h } from "vue";
import { FILES, START_POSITION } from "./constants.js";
import { Piece } from "./piece.js";
import { fenToPosition, isValidFen, isValidPositionObject, positionToFen } from "./util.js";

export const Chessboard = defineComponent({
	expose: [
		'clearHighlights',
		'clearPieces',
		'setOrientation',
		'setPosition',
		'setStartingPosition',
		'fen',
	],

	data(): {
		highlights: Set<string>,
		orientation: 'white' | 'black',
		position: Map<string, string>,
	} {
		return {
			highlights: new Set(),
			orientation: 'white',
			position: new Map(),
		}
	},

	emits: {
		squareClicked(payload: { squareName: string }) {
			return payload.squareName;
		},
		positionChanged(payload: { fen: string }) {
			return payload.fen;
		},
	},

	computed: {
		fen(): string {
			return positionToFen(this.position);
		},
	},

	watch: {
		position: {
			handler() {
				return this.$emit('positionChanged', { fen: this.fen });
			},
			deep: true,
		},
	},

	methods: {
		clearHighlights() {
			this.highlights.clear();
		},

		clearPieces() {
			this.setPosition('clear');
		},

		setStartingPosition() {
			this.setPosition('start');
		},

		setPosition(position: 'clear' | 'start' | Map<string, string>) {
			let newPosition: ReturnType<typeof fenToPosition>;
			if (typeof position === 'string') {
				const positionLowerCase = position.toLowerCase();

				if (positionLowerCase === 'clear') {
					newPosition = new Map();
				} else if (positionLowerCase === 'start') {
					newPosition = new Map(START_POSITION);
				} else if (isValidFen(position)) {
					newPosition = fenToPosition(position);
				} else {
					newPosition= new Map();
				}
			} else if (isValidPositionObject(position)) {
				newPosition = new Map(position);
			} else {
				throw new Error(`Invalid value passed to the position method: ${position}`);
			}

			const { position: currentPosition } = this;
			if (positionToFen(currentPosition) !== positionToFen(newPosition)) {
				this.position = newPosition;
			}
		},

		setOrientation(orientation: 'white' | 'black' | 'flip') {
			if (orientation === 'white' || orientation === 'black') {
				this.orientation = orientation;
			} else if (orientation === 'flip') {
				this.orientation = this.orientation === 'white' ? 'black' : 'white';
			}
			return this.orientation;
		},
	},

	render() {
		const ranks = Array.from({ length: 8 }).map((_, i) => (
			<div id={`rank-${i + 1}`} class="row g-0">
				{...FILES.map(file => {
					const squareName = `${file}${i + 1}`;
					let squareEl: HTMLElement;
					return <div
						id={`square-${squareName}`}
						class={`col square ${this.highlights.has(squareName) ? 'highlight' : ''}`}
						ref={(ref) => ref instanceof HTMLElement && (squareEl = ref)}
						onClick={() => {
							if (this.highlights.has(squareName)) {
								this.highlights.delete(squareName);
							} else {
								this.highlights.add(squareName);
							}
							this.$emit('squareClicked', { squareName });
						}}
						onDragover={(e) => {
							e.preventDefault();
							squareEl.classList.add('highlight-drop');
						}}
						onDragleave={(e) => {
							e.preventDefault();
							squareEl.classList.remove('highlight-drop');
						}}
						onDrop={(e) => {
							e.preventDefault();
							if (e.dataTransfer != null) {
								this.position.set(squareName, e.dataTransfer.getData("text/plain"));
							}
							squareEl.classList.remove('highlight-drop');
						}}
					>
						{
							this.position.has(squareName)
								? <Piece name={this.position.get(squareName)} onDrag={() => this.position.delete(squareName)} />
								: undefined
						}
					</div>;
				})}
			</div>
		));

		if (this.orientation === 'white') {
			ranks.reverse();
		}

		return (
			<div id="board">
				{ranks}
				<div class="row g-0 ps-4 py-1">
					{FILES.map(x => <div class="col text-center">{x}</div>)}
				</div>
			</div>
		);
	}
});

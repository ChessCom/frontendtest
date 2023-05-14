import { defineComponent, h } from "vue";
import { Chessboard } from "./board.js";
import { START_FEN } from "./constants.js";
import { Piece } from "./piece.js";
import { fenToPosition } from "./util.js";

export const App = defineComponent({
	components: {
		Chessboard
	},
	data(): {
		fenInput: string,
		squaresClicked: string[],
		whitePieces: Map<string, JSX.Element>,
		blackPieces: Map<string, JSX.Element>,
	} {
		return {
			fenInput: '',
			squaresClicked: [],
			whitePieces: new Map(),
			blackPieces: new Map(),
		};
	},
	computed: {
		board() {
			return this.$refs.chessboard as typeof Chessboard;
		},
	},
	mounted() {
		for (const pieceKey of 'KQRNBP'.split('')) {
			const whitePieceName = `w${pieceKey}`;
			const whitePiece = <Piece name={whitePieceName} />;

			const blackPieceName = `b${pieceKey}`;
			const blackPiece = <Piece name={blackPieceName} />;

			this.whitePieces.set(whitePieceName, whitePiece);
			this.blackPieces.set(blackPieceName, blackPiece);
		}
	},
	render() {
		return (
			<div class="container my-3">
				<div class="row justify-content-center">
					<div class="col-lg-7 col-md-10 col-12">
						<Chessboard ref="chessboard"
							onSquareClicked={({ squareName }) => this.squaresClicked.push(squareName)}
							onPositionChanged={({ fen }) => {
								console.log({fen});
								this.fenInput = fen;
							}}
						/>
					</div>
					<div class="col-lg-4 col-md-10 col">
						<div class="card p-3">
							<button
								class="btn btn-outline-dark"
								type="button"
								onClick={() => this.board.setOrientation('flip')}>
									Flip Board
							</button>
							<button
								class="btn btn-outline-dark mt-1"
								type="button"
								onClick={() => this.board.clearHighlights()}>
									Clear Highlights
							</button>
							<button
								class="btn btn-outline-dark mt-1"
								type="button"
								onClick={() => this.board.clearPieces()}>
									Clear Pieces
							</button>
							<button
								class="btn btn-outline-dark mt-1"
								type="button"
								onClick={() => {
									this.fenInput = START_FEN;
									this.board.setStartingPosition();
								}}>
									Set Starting Position
							</button>
							<button
								class="btn btn-outline-dark mt-1"
								type="button"
								onClick={() => {
									this.fenInput = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R';
									this.board.setPosition(fenToPosition(this.fenInput));
								}}>
									Set Ruy Lopez Position
							</button>
							<div class="input-group mt-1">
								<input
									type="text"
									class="form-control"
									placeholder="Insert FEN"
									value={this.fenInput}
									onChange={(e) => {
										if (e.target instanceof HTMLInputElement) {
											this.fenInput = e.target.value;
										}
									}}
									aria-label="Custom FEN Input"
									aria-describedby="apply-fen-btn" />
								<button
									class="btn btn-outline-dark"
									type="button"
									id="apply-fen-btn"
									onClick={() => {
										this.board.setPosition(fenToPosition(this.fenInput));
									}}>
										Apply FEN
								</button>
							</div>
							<button
								class="btn btn-outline-dark mt-1"
								type="button"
								id="copy-fen-btn"
								onClick={() => navigator.clipboard.writeText(this.board.fen)}>
									Copy Current FEN
							</button>
						</div>
						<div class="card p-3 mt-3">
							<div id="white-pieces" class="pieces">
								{[...this.whitePieces.values()]}
							</div>

							<div id="black-pieces" class="pieces">
								{[...this.blackPieces.values()]}
							</div>
						</div>
						<div class="card p-3 mt-3">
							<details>
								<summary>{this.squaresClicked.length} Squares Clicked <br /> (Click to toggle list view)</summary>
								<ol class="mt-2">
									{...this.squaresClicked.map(x => <li>{x}</li>)}
								</ol>
							</details>
						</div>
					</div>
				</div>
			</div>
		);
	}
})

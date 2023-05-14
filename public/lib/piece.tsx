
import { defineComponent, h } from "vue";
import pieces from "./pieces.svg.js";
import { isValidPieceName } from "./util.js";

export const Piece = defineComponent({
	props: {
		name: String,
		onDrag: Function,
	},

	render() {
		return <img
			class="piece"
			id={`piece-${this.name}`}
			src={isValidPieceName(this.name) ? pieces[this.name] : this.name ?? ''}
			draggable="true"
			onDragstart={(e) => {
				if (e.dataTransfer != null) {
					e.dataTransfer.setData("text/plain", this.name ?? '');
				}
				document.body.classList.add('dragging');
				setTimeout(() => this.onDrag?.());
			}}
			onDragend={() => {
				document.body.classList.remove('dragging');
			}}
			/>;
	},
})

import { FILES } from "./constants.js";
import pieces from "./pieces.svg.js";

export function isValidSquare(square: string): boolean {
	return square.search(/^[a-h][1-8]$/) !== -1;
}

export function isValidPieceName(pieceName: string = ''): pieceName is keyof typeof pieces {
	return Object.keys(pieces).includes(pieceName);
}

export function isValidPositionObject(pos: Map<string, string>) {
	return [...pos.entries()].every(([square, pieceName]) => isValidSquare(square) && isValidPieceName(pieceName));
}

export function isValidFen(fen: string): boolean {
	// cut off any move, castling, etc info from the end
	// we're only interested in position information
	fen = fen.replace(/ .+$/, '');

	// expand the empty square numbers to just 1s
	fen = expandFenEmptySquares(fen);

	// FEN should be 8 sections separated by slashes
	const chunks = fen.split('/');
	if (chunks.length !== 8) return false;

	// check each section
	for (let i = 0; i < 8; i++) {
		if (chunks[i].length !== 8 ||
			chunks[i].search(/[^kqrnbpKQRNBP1]/) !== -1) {
			return false;
		}
	}

	return true;
}

/**
 * Convert valid FEN string to position map.
 */
export function fenToPosition(fen: string): Map<string, string> {
	const position = new Map<string, string>();

	if (!fen || !isValidFen(fen)) return position;

	// cut off any move, castling, etc info from the end
	// we're only interested in position information
	fen = fen.replace(/ .+$/, '');

	const rows = fen.split('/');

	let currentRow = 8;
	for (let i = 0; i < 8; i++) {
		const row = rows[i].split('');
		let colIdx = 0;

		// loop through each character in the FEN section
		for (let j = 0; j < row.length; j++) {
			// number / empty squares
			const piece = row[j];
			if (piece.search(/[1-8]/) !== -1) {
				const numEmptySquares = parseInt(piece, 10);
				colIdx = colIdx + numEmptySquares;
			} else {
				// piece
				const square = FILES[colIdx] + currentRow;
				position.set(
					square,
					piece.toLowerCase() === piece
						? `b${piece.toUpperCase()}`  // black
						: `w${piece.toUpperCase()}` // white
				);
				colIdx = colIdx + 1;
			}
		}

		currentRow = currentRow - 1;
	}

	return position;
}

/**
 * Converts position map to FEN string.
 */
export function positionToFen(obj: Map<string, string>): string {
	if (!isValidPositionObject(obj)) return '';

	let fen = '';

	let currentRow = 8;
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			const square = FILES[j] + currentRow;

			// piece exists
			if (obj.has(square)) {
				const [color, pieceKey] = obj.get(square)?.split('') ?? '';
				fen += color === 'w'
					? pieceKey.toUpperCase()  // white
					: pieceKey.toLowerCase(); // black
			} else {
				fen += '1'; // empty space
			}
		}

		if (i !== 7) {
			fen = fen + '/';
		}

		currentRow = currentRow - 1;
	}

	// squeeze the empty numbers together
	fen = squeezeFenEmptySquares(fen);

	return fen;
}

export function squeezeFenEmptySquares(fen: string): string {
	return fen.replace(/11111111/g, '8')
		.replace(/1111111/g, '7')
		.replace(/111111/g, '6')
		.replace(/11111/g, '5')
		.replace(/1111/g, '4')
		.replace(/111/g, '3')
		.replace(/11/g, '2');
}

export function expandFenEmptySquares(fen: string): string {
	return fen.replace(/8/g, '11111111')
		.replace(/7/g, '1111111')
		.replace(/6/g, '111111')
		.replace(/5/g, '11111')
		.replace(/4/g, '1111')
		.replace(/3/g, '111')
		.replace(/2/g, '11');
}

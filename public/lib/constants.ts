import { fenToPosition } from "./util.js";

export const FILES = 'abcdefgh'.split('');
export const DEFAULT_DRAG_THROTTLE_RATE = 20;
export const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
export const START_POSITION = fenToPosition(START_FEN);

export const enum AnimationSpeeds {
	APPEAR = 200,
	MOVE = 200,
	SNAPBACK = 60,
	SNAP = 30,
	TRASH = 100,
};

// use unique class names to prevent clashing with anything else on the page
// and simplify selectors
// NOTE: these should never change
export const ClassNameLookup = {
	alpha: 'alpha-d2270',
	black: 'black-3c85d',
	board: 'board-b72b1',
	chessboard: 'chessboard-63f37',
	clearfix: 'clearfix-7da63',
	highlight1: 'highlight1-32417',
	highlight2: 'highlight2-9c5d2',
	notation: 'notation-322f9',
	numeric: 'numeric-fc462',
	piece: 'piece-417db',
	row: 'row-5277c',
	sparePieces: 'spare-pieces-7492f',
	sparePiecesBottom: 'spare-pieces-bottom-ae20f',
	sparePiecesTop: 'spare-pieces-top-4028b',
	square: 'square-55d63',
	white: 'white-1e1d7'
} as const;

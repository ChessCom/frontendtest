const Column = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
  } as const satisfies Record<number, string>;
  
  const Row = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
  } as const satisfies Record<number, string>;


export type ValidRowOrColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type ChessCoordinate = {
    col: ValidRowOrColumnNumber;
    row: ValidRowOrColumnNumber;
};

type RowNotation = keyof typeof Row;
type ColNotation = keyof typeof Column;
type ChessCoordinateNotation = `${keyof typeof Column}${keyof typeof Row}`;

export const getChessCoordinate = ({ col, row }: ChessCoordinate): ChessCoordinateNotation => {
    const columnLetter = Column[col as ColNotation];
    const rowNumber = Row[row as RowNotation];
    return `${columnLetter}${rowNumber}` as ChessCoordinateNotation;
};

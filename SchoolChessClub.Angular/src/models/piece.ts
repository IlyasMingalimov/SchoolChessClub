export enum PieceType {
  Pawn = 'pawn',
  Rook = 'rook',
  Knight = 'knight',
  Bishop = 'bishop',
  Queen = 'queen',
  King = 'king'
}

export enum PieceColor {
  White = 'white',
  Black = 'black'
}

export interface ChessPiece {
  type: PieceType
  color: PieceColor
  position: string // exem, 'a1', 'e4' и т.д.
}

export interface ChessSquare {
  id: string // exem, 'a1', 'h8'
  color: 'white' | 'black'
  piece: ChessPiece | null
}

export interface ChessBoard {
  pieces: ChessPiece[]
}

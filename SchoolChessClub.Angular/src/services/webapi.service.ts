import { ChessBoard, PieceColor, PieceType } from "../models/piece";

export class WebapiService {

    demo: string = "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2"
    price: number = 0.5
    forcePrice: number = -3

  getRandomEvaluationDrill(): evaluationDrill
  {
      return evaluationDrillDemo
  }
}

export type evaluationDrill = { chessBoard: ChessBoard }

let evaluationDrillDemo: evaluationDrill = {
  chessBoard:
  {
    pieces: [
      {
        type: PieceType.Rook,
        color: PieceColor.White,
        position: "h1"
      },
      {
        type: PieceType.Knight,
        color: PieceColor.White,
        position: "g1"
      },
      {
        type: PieceType.Bishop,
        color: PieceColor.White,
        position: "f1"
      },
      {
        type: PieceType.King,
        color: PieceColor.White,
        position: "e1"
      },
      {
        type: PieceType.Queen,
        color: PieceColor.White,
        position: "d1"
      },
      {
        type: PieceType.Bishop,
        color: PieceColor.White,
        position: "c1"
      },
      {
        type: PieceType.Knight,
        color: PieceColor.White,
        position: "b1"
      },
      {
        type: PieceType.Rook,
        color: PieceColor.White,
        position: "a1"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.White,
        position: "h2"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.White,
        position: "g2"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.White,
        position: "f2"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.White,
        position: "e2"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.White,
        position: "d2"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.White,
        position: "c2"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.White,
        position: "b2"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.White,
        position: "a2"
      },
      {
        type: PieceType.Rook,
        color: PieceColor.Black,
        position: "h8"
      },
      {
        type: PieceType.Knight,
        color: PieceColor.Black,
        position: "g8"
      },
      {
        type: PieceType.Bishop,
        color: PieceColor.Black,
        position: "f8"
      },
      {
        type: PieceType.King,
        color: PieceColor.Black,
        position: "e8"
      },
      {
        type: PieceType.Queen,
        color: PieceColor.Black,
        position: "d8"
      },
      {
        type: PieceType.Bishop,
        color: PieceColor.Black,
        position: "c8"
      },
      {
        type: PieceType.Knight,
        color: PieceColor.Black,
        position: "b8"
      },
      {
        type: PieceType.Rook,
        color: PieceColor.Black,
        position: "a8"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.Black,
        position: "h7"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.Black,
        position: "g7"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.Black,
        position: "f7"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.Black,
        position: "e7"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.Black,
        position: "d7"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.Black,
        position: "c7"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.Black,
        position: "b2"
      },
      {
        type: PieceType.Pawn,
        color: PieceColor.Black,
        position: "a7"
      }
    ]
  }
}

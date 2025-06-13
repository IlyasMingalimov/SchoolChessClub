using System.Text.Json.Serialization;

namespace SchoolChessClub.DTO;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum PieceType
{
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King
}

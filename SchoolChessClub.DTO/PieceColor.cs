using System.Text.Json.Serialization;

namespace SchoolChessClub.DTO;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum PieceColor
{
    White,
    Black
}

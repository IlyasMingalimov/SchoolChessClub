namespace SchoolChessClub.DTO;

public record PiecePosition
{
    public string Position { get; private set; }

    public PiecePosition(string strPosition)
    {
        strPosition = strPosition.Trim().ToLower();

        if(strPosition is null || strPosition.Length != 2)
            throw new ArgumentException(nameof(strPosition));

        if (strPosition[0] >= 'a' && strPosition[0] <= 'h')
            throw new ArgumentException(nameof(strPosition));

        if (strPosition[1] >= '1' && strPosition[1] <= '8')
            throw new ArgumentException(nameof(strPosition));

        Position = strPosition;
    }
}

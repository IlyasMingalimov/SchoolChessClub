using SchoolChessClub.System.Support;

namespace SchoolChessClub.System.Test;

public class TimeTests
{
    private readonly Time _timeService;

    public TimeTests() => _timeService = new Time();

    [Fact]
    public void GetIsoCurrentTime_ReturnsValidIso8601String()
    {
        // Act
        string isoTime = _timeService.GetIsoCurrentTime();

        // Assert
        Assert.Matches(@"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$", isoTime);
    }

    [Fact]
    public void GetIsoCurrentTime_ReturnsCurrentUtcTimeWithinTolerance()
    {
        // Arrange
        var expectedTime = DateTimeOffset.UtcNow;

        // Act
        string isoTime = _timeService.GetIsoCurrentTime();
        var parsedTime = DateTimeOffset.Parse(isoTime);

        // Assert
        Assert.True((parsedTime - expectedTime).Duration() <= TimeSpan.FromSeconds(1));
    }
}

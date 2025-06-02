using SchoolChessClub.System.Interface;

namespace SchoolChessClub.System.Support
{
    public class Time : ITime
    {
        public string GetIsoCurrentTime() => DateTimeOffset.UtcNow.ToString("o");
    }
}

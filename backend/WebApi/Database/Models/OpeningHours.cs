namespace WebApi.Database.Models;

public class OpeningHours
{
    public long Id { get; set; }
    public string DayOfWeek { get; set; }
    public TimeOnly From { get; set; }
    public TimeOnly To { get; set; }
}
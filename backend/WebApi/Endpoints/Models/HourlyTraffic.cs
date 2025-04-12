namespace WebApi.Endpoints.Models;

public record HourlyTraffic(TimeOnly Hour, TrafficStatus TrafficStatus, long TotalVisitors);
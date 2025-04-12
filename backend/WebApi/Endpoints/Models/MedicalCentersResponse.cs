namespace WebApi.Endpoints.Models;

public record MedicalCentersResponse(
    long Id,
    string Name,
    Location Location,
    TrafficStatus TrafficStatus,
    long EstimatedVisitors,
    string Address,
    string PhoneNumber,
    IReadOnlyCollection<string> AvailableProcedureTypes,
    OpeningHours OpeningHours
);

public record struct Location(float Longitude, float Latitude);

public record OpeningHours(string DayOfWeek, TimeOnly From, TimeOnly To);
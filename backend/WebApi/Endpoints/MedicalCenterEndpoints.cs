using Microsoft.AspNetCore.Mvc;

namespace WebApi.Endpoints;

public static class MedicalCenterEndpoints
{
    public static RouteGroupBuilder MapMedicalCenter(this RouteGroupBuilder app)
    {
        app.MapGet("/", (
            [FromQuery(Name = "type")] string? type,
            [FromQuery(Name = "time")] TimeOnly? time
            ) => $"Time:asd");
        app.MapGet("/{id}/traffic/{day}", (int id, string day) => "asd");

        return app;
    }
}
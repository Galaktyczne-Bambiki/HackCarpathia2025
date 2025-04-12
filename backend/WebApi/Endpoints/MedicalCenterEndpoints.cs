using Microsoft.AspNetCore.Mvc;
using WebApi.Services;

namespace WebApi.Endpoints;

public static class MedicalCenterEndpoints
{
    public static RouteGroupBuilder MapMedicalCenter(this RouteGroupBuilder app)
    {
        app.MapGet("/", async (
            [FromQuery(Name = "type")] string? type,
            [FromQuery(Name = "time")] TimeOnly? time,
            [FromServices] MedicalCenterService service
            ) => await service.ListMedicalCentersAsync(type, time));
        app.MapGet("/{id}/traffic/{day}", (int id, string day,[FromServices] MedicalCenterService service) => service.GetMedicalCenterAsync(id, day));

        return app;
    }
}
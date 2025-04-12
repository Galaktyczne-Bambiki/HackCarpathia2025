using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using WebApi.Endpoints.Models;
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

        app.MapPost("/traffic", async ([FromBody] EnterTrafficRequest request,  [FromServices] MedicalCenterService service, [FromHeader(Name = "X-API-KEY")] string apiKey) =>
        {
            if(apiKey != "super-klucz")
                return Results.Unauthorized();
            await service.AddNewTraffic(request);
            return Results.Ok();
        });

        return app;
    }
}
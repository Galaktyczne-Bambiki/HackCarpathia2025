using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using WebApi.Database;
using WebApi.Endpoints;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddDbContextPool<DatabaseContext>((provider, optionsBuilder) =>
{
    optionsBuilder.EnableSensitiveDataLogging();
    optionsBuilder.EnableDetailedErrors();
    optionsBuilder.UseNpgsql(provider.GetRequiredService<IConfiguration>()["Database:PostgreSQL:ConnectionString"]);
});

var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapOpenApi();
app.MapScalarApiReference();

app.MapGroup("v1")
    .MapGroup("medical-center")
    .MapMedicalCenter();

app.Run();

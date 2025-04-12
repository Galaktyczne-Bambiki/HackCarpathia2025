using System.Threading.RateLimiting;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using WebApi.Database;
using WebApi.Endpoints;
using WebApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("base", opt =>
    {
        opt.AutoReplenishment = true;
        opt.PermitLimit = 60;
        opt.QueueLimit = 0;
        opt.Window = TimeSpan.FromMinutes(1);
    });
});

builder.Services.AddOpenApi();
builder.Services.AddDbContextPool<DatabaseContext>((provider, optionsBuilder) =>
{
    optionsBuilder.EnableSensitiveDataLogging();
    optionsBuilder.EnableDetailedErrors();
    optionsBuilder.UseNpgsql(provider.GetRequiredService<IConfiguration>()["Database:PostgreSQL:ConnectionString"]);
});
builder.Services.AddScoped<MedicalCenterService>();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapOpenApi();
app.MapScalarApiReference();

app.MapGroup("v1")
    .MapGroup("medical-center")
    .MapMedicalCenter()
    .RequireRateLimiting("base");

app.Run();

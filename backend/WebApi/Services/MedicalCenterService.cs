using LinqKit;
using Microsoft.EntityFrameworkCore;
using WebApi.Database;
using WebApi.Database.Models;
using WebApi.Endpoints.Models;
using Location = WebApi.Endpoints.Models.Location;
using OpeningHours = WebApi.Endpoints.Models.OpeningHours;

namespace WebApi.Services;

public class MedicalCenterService
{
    private readonly DatabaseContext _context;

    public MedicalCenterService(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<ICollection<MedicalCentersResponse>> ListMedicalCentersAsync(string? type, TimeOnly? time)
    {
        var predicate = PredicateBuilder.New<MedicalCenter>(true);

        if (type is not null)
            predicate.And(e => e.Procedures.Any(x => x.Name == type));
        if (time.HasValue)
            predicate.And(e => e.Traffic.Any(x => x.TimeStamp.Hour == time.Value.Hour));

        var medicalCenters = await _context.MedicalCenters
            .Include(e => e.OpeningHours)
            .Include(e => e.Location)
            .Include(e => e.Procedures)
            .Include(e => e.Traffic)
            .Where(predicate)
            .ToListAsync();

        return medicalCenters
            .Select(e => new MedicalCentersResponse(e.Id, e.Name, new Location(e.Location.Longitude, e.Location.Latitude), TrafficStatus.High, 12, e.Address, e.Phone, e.Procedures.Select(x => x.Name).ToList(), new OpeningHours(e.OpeningHours.DayOfWeek, e.OpeningHours.From, e.OpeningHours.To)))
            .ToList();
    }

    public async Task<MedicalCentersResponse> GetMedicalCenterAsync(int id, string type)
    {
        var entity = await _context.MedicalCenters
            .Include(e => e.OpeningHours)
            .Include(e => e.Location)
            .Include(e => e.Procedures)
            .Include(e => e.Traffic)
            .FirstAsync(e => e.Id == id && e.Procedures.Any(x => x.Name == type));
        return new MedicalCentersResponse(entity.Id, entity.Name, new Location(entity.Location.Longitude, entity.Location.Latitude), TrafficStatus.High, 12, entity.Address, entity.Phone, entity.Procedures.Select(x => x.Name).ToList(), new OpeningHours(entity.OpeningHours.DayOfWeek, entity.OpeningHours.From, entity.OpeningHours.To));
    }
}
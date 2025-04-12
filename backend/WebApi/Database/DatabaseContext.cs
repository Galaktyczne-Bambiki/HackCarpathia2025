using Microsoft.EntityFrameworkCore;
using WebApi.Database.Models;

namespace WebApi.Database;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }
    
    public DbSet<Location> Locations { get; set; }
    public DbSet<MedicalCenter> MedicalCenters { get; set; }
    public DbSet<OpeningHours> OpeningHours { get; set; }
    public DbSet<Procedure> Procedures { get; set; }
    public DbSet<Traffic> Traffic { get; set; }
    
    
}
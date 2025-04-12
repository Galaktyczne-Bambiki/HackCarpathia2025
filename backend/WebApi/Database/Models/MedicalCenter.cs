namespace WebApi.Database.Models;

public class MedicalCenter
{
    public long Id { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public virtual OpeningHours OpeningHours { get; set; }
    public virtual Location Location { get; set; }
    public virtual ICollection<Procedure> Procedures { get; set; }
    public virtual ICollection<Traffic> Traffic { get; set; }
}
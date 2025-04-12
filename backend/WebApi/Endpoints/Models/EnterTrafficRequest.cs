namespace WebApi.Endpoints.Models;

public class EnterTrafficRequest
{
    public long MedicalCenterId { get; set; }
    public long CurrentVisitors { get; set; }
}
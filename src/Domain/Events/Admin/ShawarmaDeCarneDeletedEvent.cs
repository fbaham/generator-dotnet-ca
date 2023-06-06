namespace Prometheus.Domain.Events.Admin;
public class ShawarmaDeCarneDeletedEvent : DomainEvent
{
    public ShawarmaDeCarneDeletedEvent(ShawarmaDeCarne obj)
    {
        Obj = obj;
    }
    public ShawarmaDeCarne Obj { get; }
}
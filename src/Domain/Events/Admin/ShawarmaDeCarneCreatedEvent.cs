namespace Prometheus.Domain.Events.Admin;
public class ShawarmaDeCarneCreatedEvent : DomainEvent
{
    public ShawarmaDeCarneCreatedEvent(ShawarmaDeCarne obj)
    {
        Obj = obj;
    }
    public ShawarmaDeCarne Obj { get; }
}

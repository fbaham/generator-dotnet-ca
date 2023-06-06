namespace Prometheus.Domain.Events.Admin;
public class ShawarmaDeCarneUpdatedEvent : DomainEvent
{
    public ShawarmaDeCarneUpdatedEvent(ShawarmaDeCarne obj)
    {
        Obj = obj;
    }
    public ShawarmaDeCarne Obj { get; }
}
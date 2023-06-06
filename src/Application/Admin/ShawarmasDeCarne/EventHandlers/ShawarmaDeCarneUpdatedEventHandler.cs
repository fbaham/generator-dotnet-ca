namespace Prometheus.Application.Admin.ShawarmasDeCarne.EventHandlers;
public class ShawarmaDeCarneUpdatedEventHandler : INotificationHandler<DomainEventNotification<ShawarmaDeCarneUpdatedEvent>>
{
    private readonly ILogger<ShawarmaDeCarneUpdatedEventHandler> _logger;
    public ShawarmaDeCarneUpdatedEventHandler(ILogger<ShawarmaDeCarneUpdatedEventHandler> logger)
    {
        _logger = logger;
    }
    public Task Handle(DomainEventNotification<ShawarmaDeCarneUpdatedEvent> notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("Prometheus Domain Event: {DomainEvent}", notification.GetType().Name);
        return Task.CompletedTask;
    }
}
namespace Prometheus.Application.Admin.ShawarmasDeCarne.EventHandlers;
public class ShawarmaDeCarneCreatedEventHandler : INotificationHandler<DomainEventNotification<ShawarmaDeCarneCreatedEvent>>
{
    private readonly ILogger<ShawarmaDeCarneCreatedEventHandler> _logger;
    public ShawarmaDeCarneCreatedEventHandler(ILogger<ShawarmaDeCarneCreatedEventHandler> logger)
    {
        _logger = logger;
    }
    public Task Handle(DomainEventNotification<ShawarmaDeCarneCreatedEvent> notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("Prometheus Domain Event: {DomainEvent}", notification.GetType().Name);
        return Task.CompletedTask;
    }
}
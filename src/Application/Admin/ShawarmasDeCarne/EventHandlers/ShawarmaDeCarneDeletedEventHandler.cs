namespace Prometheus.Application.Admin.ShawarmasDeCarne.EventHandlers;
public class ShawarmaDeCarneDeletedEventHandler : INotificationHandler<DomainEventNotification<ShawarmaDeCarneDeletedEvent>>
{
    private readonly ILogger<ShawarmaDeCarneDeletedEventHandler> _logger;
    public ShawarmaDeCarneDeletedEventHandler(ILogger<ShawarmaDeCarneDeletedEventHandler> logger)
    {
        _logger = logger;
    }
    public Task Handle(DomainEventNotification<ShawarmaDeCarneDeletedEvent> notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("Prometheus Domain Event: {DomainEvent}", notification.GetType().Name);
        return Task.CompletedTask;
    }
}
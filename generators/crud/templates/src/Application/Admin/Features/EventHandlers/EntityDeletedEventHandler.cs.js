namespace <%= project %>.Application.Admin.<%= plural %>.EventHandlers;
public class <%= pascal %>DeletedEventHandler : INotificationHandler<DomainEventNotification<<%= pascal %>DeletedEvent>>
{
    private readonly ILogger<<%= pascal %>DeletedEventHandler> _logger;
    public <%= pascal %>DeletedEventHandler(ILogger<<%= pascal %>DeletedEventHandler> logger)
    {
        _logger = logger;
    }
    public Task Handle(DomainEventNotification<<%= pascal %>DeletedEvent> notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("<%= project %> Domain Event: {DomainEvent}", notification.GetType().Name);
        return Task.CompletedTask;
    }
}
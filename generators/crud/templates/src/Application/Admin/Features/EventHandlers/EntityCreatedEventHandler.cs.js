namespace <%= project %>.Application.Admin.<%= plural %>.EventHandlers;
public class <%= pascal %>CreatedEventHandler : INotificationHandler<DomainEventNotification<<%= pascal %>CreatedEvent>>
{
    private readonly ILogger<<%= pascal %>CreatedEventHandler> _logger;
    public <%= pascal %>CreatedEventHandler(ILogger<<%= pascal %>CreatedEventHandler> logger)
    {
        _logger = logger;
    }
    public Task Handle(DomainEventNotification<<%= pascal %>CreatedEvent> notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("<%= project %> Domain Event: {DomainEvent}", notification.GetType().Name);
        return Task.CompletedTask;
    }
}
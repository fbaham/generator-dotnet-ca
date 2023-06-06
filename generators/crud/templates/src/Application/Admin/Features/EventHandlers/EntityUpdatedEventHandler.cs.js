namespace <%= project %>.Application.Admin.<%= plural %>.EventHandlers;
public class <%= pascal %>UpdatedEventHandler : INotificationHandler<DomainEventNotification<<%= pascal %>UpdatedEvent>>
{
    private readonly ILogger<<%= pascal %>UpdatedEventHandler> _logger;
    public <%= pascal %>UpdatedEventHandler(ILogger<<%= pascal %>UpdatedEventHandler> logger)
    {
        _logger = logger;
    }
    public Task Handle(DomainEventNotification<<%= pascal %>UpdatedEvent> notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("<%= project %> Domain Event: {DomainEvent}", notification.GetType().Name);
        return Task.CompletedTask;
    }
}
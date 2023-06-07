namespace Prometheus.Application.Admin.<%= plural %>.Commands.Update;
[Authorize(Policy = Permissions.<%= write %>)]
public record Update<%= pascal %>Command : IRequest<Unit>
{
    /* YOUR CODE */
}
public class Update<%= pascal %>CommandHandler : IRequestHandler<Update<%= pascal %>Command, Unit>
{
    private readonly I<%= pascal %>Service _<%= camel %>Services;
    public Update<%= pascal %>CommandHandler(I<%= pascal %>Service <%= camel %>Services)
    {
        _<%= camel %>Services = <%= camel %>Services;
    }
    public async Task<Unit> Handle(Update<%= pascal %>Command request, CancellationToken cancellationToken)
    {
        var obj = new <%= pascal %>Dto()
        {
            /* YOUR CODE */
        };
        return await _<%= camel %>Services.UpdateAsync(obj, cancellationToken);
    }
}

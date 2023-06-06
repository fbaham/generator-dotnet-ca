namespace <%= project %>.Application.Admin.<%= plural %>.Commands.Delete;
[Authorize(Policy = Permissions.WRITE)]
public record Delete<%= pascal %>Command : IRequest<Unit>
{
    public int Id { get; set; }
}
public class Delete<%= pascal %>CommandHandler : IRequestHandler<Delete<%= pascal %>Command, Unit>
{
    private readonly I<%= pascal %>Service _<%= camel %>Services;
    public Delete<%= pascal %>CommandHandler(I<%= pascal %>Service <%= camel %>Services)
    {
        _<%= camel %>Services = <%= camel %>Services;
    }
    public async Task<Unit> Handle(Delete<%= pascal %>Command request, CancellationToken cancellationToken)
    {
        return await _<%= camel %>Services.DeleteAsync(request.Id, cancellationToken);
    }
}

namespace <%= project %>.Application.Admin.<%= plural %>.Commands.Load;
[Authorize(Policy = Permissions.<%= write %>)]
public record Load<%= pascal %>ListCommand : IRequest<int>
{
    public string? base64 { get; set; }
}
public class Load<%= pascal %>ListCommandHandler : IRequestHandler<Load<%= pascal %>ListCommand, int>
{
    private readonly I<%= pascal %>Service _<%= camel %>Services;
    public Load<%= pascal %>ListCommandHandler(I<%= pascal %>Service <%= camel %>Services)
    {
        _<%= camel %>Services = <%= camel %>Services;
    }
    public async Task<int> Handle(Load<%= pascal %>ListCommand request, CancellationToken cancellationToken)
    {
        return await _<%= camel %>Services.LoadAsync(request.base64, cancellationToken);
    }
}
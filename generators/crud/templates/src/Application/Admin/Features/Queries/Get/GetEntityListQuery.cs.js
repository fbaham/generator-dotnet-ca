namespace <%= project %>.Application.Admin.<%= plural %>.Queries.Get;
[Authorize(Policy = Permissions.<%= read %>)]
public record Get<%= pascal %>ListQuery : IRequest<Get<%= pascal %>ListDto>
{
    public int Id { get; set; }
}
public class Get<%= pascal %>ListQueryHandler : IRequestHandler<Get<%= pascal %>ListQuery, Get<%= pascal %>ListDto>
{
    private readonly I<%= pascal %>Service _<%= camel %>Service;
    public Get<%= pascal %>ListQueryHandler(I<%= pascal %>Service <%= camel %>Service)
    {
        _<%= camel %>Service = <%= camel %>Service;
    }
    public async Task<Get<%= pascal %>ListDto> Handle(Get<%= pascal %>ListQuery request, CancellationToken cancellationToken)
    {
        return await _<%= camel %>Service.GetAsync(request.Id);
    }
}

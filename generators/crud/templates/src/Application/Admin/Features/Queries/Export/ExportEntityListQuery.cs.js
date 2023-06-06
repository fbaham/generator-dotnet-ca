namespace <%= project %>.Application.Admin.<%= plural %>.Queries.Export;
[Authorize(Policy = Permissions.READ)]
public record Export<%= pascal %>ListQuery : IRequest<Export<%= pascal %>ListVm>
{
}
public class Export<%= pascal %>ListQueryHandler : IRequestHandler<Export<%= pascal %>ListQuery, Export<%= pascal %>ListVm>
{
    private readonly I<%= pascal %>Service _<%= camel %>Service;
    public Export<%= pascal %>ListQueryHandler(I<%= pascal %>Service <%= camel %>Service)
    {
        _<%= camel %>Service = <%= camel %>Service;
    }
    public async Task<Export<%= pascal %>ListVm> Handle(Export<%= pascal %>ListQuery request, CancellationToken cancellationToken)
    {
        return await _<%= camel %>Service.ExportAsync(cancellationToken);
    }
}

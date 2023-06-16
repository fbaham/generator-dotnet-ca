using <%= project %>.Application.Admin.<%= plural %>.DTOs;

namespace Prometheus.Application.Admin.<%= plural %>.Commands.Update;
[Authorize(Policy = Permissions.<%= write %>)]
public record Update<%= pascal %>Command : IRequest<Unit>
{
    public int Id { get; set; }
}
public class Update<%= pascal %>CommandHandler : IRequestHandler<Update<%= pascal %>Command, Unit>
{
    private readonly I<%= pascal %>Service _<%= camel %>Services;
    private readonly IMapper _mapper;
    public Update<%= pascal %>CommandHandler(I<%= pascal %>Service <%= camel %>Services, IMapper mapper)
    {
        _<%= camel %>Services = <%= camel %>Services;
        _mapper = mapper;
    }
    public async Task<Unit> Handle(Update<%= pascal %>Command request, CancellationToken cancellationToken)
    {
        var obj = _mapper.Map<Update<%= pascal %>Dto>(request);
        return await _<%= camel %>Services.UpdateAsync(obj, cancellationToken);
    }
}

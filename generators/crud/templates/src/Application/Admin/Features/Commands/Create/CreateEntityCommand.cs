using <%= project %>.Application.Admin.<%= plural %>.DTOs;

namespace <%= project %>.Application.Admin.<%= plural %>.Commands.Create;
[Authorize(Policy = Permissions.<%= write %>)] 
public record Create<%= pascal %>Command : IRequest<int>
{
    /* YOUR CODE */
}

public class Create<%= pascal %>CommandHandler : IRequestHandler<Create<%= pascal %>Command, int>
{
    private readonly I<%= pascal %>Service _<%= camel %>Services;
    private readonly IMapper _mapper;

    public Create<%= pascal %>CommandHandler(I<%= pascal %>Service <%= camel %>Services, IMapper mapper)
    {
        _<%= camel %>Services = <%= camel %>Services;
        _mapper = mapper;
    }
    public async Task<int> Handle(Create<%= pascal %>Command request, CancellationToken cancellationToken)
    {
        var obj = _mapper.Map<Create<%= pascal %>Dto>(request);
        return await _<%= camel %>Services.CreateAsync(obj, cancellationToken);
    }
}


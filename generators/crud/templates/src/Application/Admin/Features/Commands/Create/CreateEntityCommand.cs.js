namespace <%= project %>.Application.Admin.<%= plural %>.Commands.Create;
[Authorize(Policy = Permissions.<%= write %>)] 
public record Create<%= pascal %>Command : IRequest<int>
{
    /* YOUR CODE */
}

public class Create<%= pascal %>CommandHandler : IRequestHandler<Create<%= pascal %>Command, int>
{
    private readonly I<%= pascal %>Service _<%= camel %>Services;
    public Create<%= pascal %>CommandHandler(I<%= pascal %>Service <%= camel %>Services)
    {
        _<%= camel %>Services = <%= camel %>Services;
    }
    public async Task<int> Handle(Create<%= pascal %>Command request, CancellationToken cancellationToken)
    {
        var obj = new Create<%= pascal %>Dto()
        {
            /* YOUR CODE */
        };
        return await _<%= camel %>Services.CreateAsync(obj, cancellationToken);
    }
}


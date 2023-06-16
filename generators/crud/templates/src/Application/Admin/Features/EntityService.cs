using <%= project %>.Application.Admin.<%= plural %>.DTOs;

namespace <%= project %>.Application.Admin.<%= plural %>;
public class <%= pascal %>Service : I<%= pascal %>Service
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;
    private readonly ICsvFileBuilder _fileBuilder;
    public <%= pascal %>Service(IApplicationDbContext context, IMapper mapper, ICsvFileBuilder fileBuilder)
    {
        _context = context;
        _mapper = mapper;
        _fileBuilder = fileBuilder;
    }

    public async Task<int> CreateAsync(Create<%= pascal %>Dto obj, CancellationToken cancellationToken)
    {
        var entity = new <%= pascal %>
        {
            /* your code */
        };
        entity.AddDomainEvent(new <%= pascal %>CreatedEvent(entity));
        _context.<%= plural %>.Add(entity);
        await _context.SaveChangesAsync(cancellationToken);
        return entity.Id;
    }

    public async Task<Get<%= pascal %>ListDto> GetAsync(int id)
    {
        return new Get<%= pascal %>ListDto()
        {
            <%= pascal %>List = await _context.<%= plural %>
            .Where(o => o.Id == id || id == 0)
            .OrderBy(o => o.Id)
            .ProjectTo<<%= pascal %>Dto>(_mapper.ConfigurationProvider)
            .ToListAsync()
        };
    }

    public async Task<Unit> UpdateAsync(Update<%= pascal %>Dto obj, CancellationToken cancellationToken)
    {
        var entity = await _context.<%= plural %>
            .FindAsync(new object[] { obj.Id }, cancellationToken);
        if (entity == null)
        {
            throw new NotFoundException(nameof(<%= pascal %>), obj.Id);
        }
        /* your code */
        entity.AddDomainEvent(new <%= pascal %>UpdatedEvent(entity));
        await _context.SaveChangesAsync(cancellationToken);
        return Unit.Value;
    }

    public async Task<Unit> DeleteAsync(int id, CancellationToken cancellationToken)
    {
        var entity = await _context.<%= plural %>
            .Where(o => o.Id == id)
            .SingleOrDefaultAsync();
        if (entity == null)
        {
            throw new NotFoundException(nameof(<%= pascal %>), id);
        }
        entity.AddDomainEvent(new <%= pascal %>DeletedEvent(entity));
        _context.<%= plural %>.Remove(entity);
        await _context.SaveChangesAsync(cancellationToken);
        return Unit.Value;
    }
}

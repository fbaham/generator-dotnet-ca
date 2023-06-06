namespace Prometheus.Application.Admin.ShawarmasDeCarne;
public class ShawarmaDeCarneService : IShawarmaDeCarneService
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;
    private readonly ICsvFileBuilder _fileBuilder;
    public ShawarmaDeCarneService(IApplicationDbContext context, IMapper mapper, ICsvFileBuilder fileBuilder)
    {
        _context = context;
        _mapper = mapper;
        _fileBuilder = fileBuilder;
    }

    public async Task<Unit> DeleteShawarmaDeCarne(int id, CancellationToken cancellationToken)
    {
        var entity = await _context.ShawarmasDeCarne
            .Where(o => o.Id == id)
            .SingleOrDefaultAsync();
        if (entity == null)
        {
            throw new NotFoundException(nameof(ShawarmaDeCarne), id);
        }
        entity.AddDomainEvent(new ShawarmaDeCarneDeletedEvent(entity));
        _context.ShawarmasDeCarne.Remove(entity);
        await _context.SaveChangesAsync(cancellationToken);
        return Unit.Value;
    }

    public async Task<int> CreateAsync(CreateShawarmaDeCarneDto obj, CancellationToken cancellationToken)
    {
        var entity = new ShawarmaDeCarne
        {
            /* your code */
        };
        entity.AddDomainEvent(new ShawarmaDeCarneCreatedEvent(entity));
        _context.ShawarmasDeCarne.Add(entity);
        await _context.SaveChangesAsync(cancellationToken);
        return entity.Id;
    }

    public async Task<GetShawarmaDeCarneListDto> GetAsync(int id)
    {
        return new GetShawarmaDeCarneListDto()
        {
            ShawarmaDeCarneList = await _context.ShawarmasDeCarne
            .Where(o => o.Id == id || id == 0)
            .OrderBy(o => o.Id)
            .ProjectTo<ShawarmaDeCarneDto>(_mapper.ConfigurationProvider)
            .ToListAsync()
        };
    }

    public async Task<Unit> UpdateAsync(ShawarmaDeCarneDto obj, CancellationToken cancellationToken)
    {
        var entity = await _context.ShawarmasDeCarne
            .FindAsync(new object[] { obj.Id }, cancellationToken);
        if (entity == null)
        {
            throw new NotFoundException(nameof(ShawarmaDeCarne), obj.Id);
        }
        /* your code */
        entity.AddDomainEvent(new ShawarmaDeCarneUpdatedEvent(entity));
        await _context.SaveChangesAsync(cancellationToken);
        return Unit.Value;
    }

    public async Task<Unit> DeleteAsync(int id, CancellationToken cancellationToken)
    {
        var entity = await _context.ShawarmasDeCarne
            .Where(o => o.Id == id)
            .SingleOrDefaultAsync();
        if (entity == null)
        {
            throw new NotFoundException(nameof(ShawarmaDeCarne), id);
        }
        entity.AddDomainEvent(new ShawarmaDeCarneDeletedEvent(entity));
        _context.ShawarmasDeCarne.Remove(entity);
        await _context.SaveChangesAsync(cancellationToken);
        return Unit.Value;
    }

    public async Task<int> LoadAsync(string? base64, CancellationToken cancellationToken)
    {
        var buffer = Convert.FromBase64String(base64); ;
        int c = 0;
        using (var reader = new StreamReader(new MemoryStream(buffer)))
        {
            while (!reader.EndOfStream)
            {
                var line = reader.ReadLine();
                var values = line.Split(';');
                var entity = new ShawarmaDeCarne()
                {
                    /* your code */
                };
                entity.AddDomainEvent(new ShawarmaDeCarneCreatedEvent(entity));
                await _context.ShawarmasDeCarne.AddAsync(entity, cancellationToken);
                await _context.SaveChangesAsync(cancellationToken);
                c++;
            }
        }
        return c;
    }
    public async Task<ExportShawarmaDeCarneListVm> ExportAsync(CancellationToken cancellationToken)
    {
        var records = await _context.ShawarmasDeCarne
            .ProjectTo<ShawarmaDeCarneFileRecord>(_mapper.ConfigurationProvider)
            .ToListAsync();
        var vm = new ExportShawarmaDeCarneListVm(
            "ShawarmaDeCarneList.csv",
            "text/csv",
            _fileBuilder.BuildShawarmaDeCarneFile(records));
        return vm;
    }
}

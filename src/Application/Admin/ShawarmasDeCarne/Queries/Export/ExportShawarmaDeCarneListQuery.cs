namespace Prometheus.Application.Admin.ShawarmasDeCarne.Queries.Export;
[Authorize(Policy = Permissions.READ)]
public record ExportShawarmaDeCarneListQuery : IRequest<ExportShawarmaDeCarneListVm>
{
}
public class ExportShawarmaDeCarneListQueryHandler : IRequestHandler<ExportShawarmaDeCarneListQuery, ExportShawarmaDeCarneListVm>
{
    private readonly IShawarmaDeCarneService _shawarmaDeCarneService;
    public ExportShawarmaDeCarneListQueryHandler(IShawarmaDeCarneService shawarmaDeCarneService)
    {
        _shawarmaDeCarneService = shawarmaDeCarneService;
    }
    public async Task<ExportShawarmaDeCarneListVm> Handle(ExportShawarmaDeCarneListQuery request, CancellationToken cancellationToken)
    {
        return await _shawarmaDeCarneService.ExportAsync(cancellationToken);
    }
}

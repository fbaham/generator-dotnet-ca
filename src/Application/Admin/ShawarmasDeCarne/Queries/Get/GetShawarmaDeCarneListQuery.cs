namespace Prometheus.Application.Admin.ShawarmasDeCarne.Queries.Get;
[Authorize(Policy = Permissions.READ)]
public record GetShawarmaDeCarneListQuery : IRequest<GetShawarmaDeCarneListDto>
{
    public int Id { get; set; }
}
public class GetShawarmaDeCarneListQueryHandler : IRequestHandler<GetShawarmaDeCarneListQuery, GetShawarmaDeCarneListDto>
{
    private readonly IShawarmaDeCarneService _shawarmaDeCarneService;
    public GetShawarmaDeCarneListQueryHandler(IShawarmaDeCarneService shawarmaDeCarneService)
    {
        _shawarmaDeCarneService = shawarmaDeCarneService;
    }
    public async Task<GetShawarmaDeCarneListDto> Handle(GetShawarmaDeCarneListQuery request, CancellationToken cancellationToken)
    {
        return await _shawarmaDeCarneService.GetAsync(request.Id);
    }
}

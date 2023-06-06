namespace Prometheus.Application.Admin.ShawarmasDeCarne.Commands.Load;
[Authorize(Policy = Permissions.WRITE)]
public record LoadShawarmaDeCarneListCommand : IRequest<int>
{
    public string? base64 { get; set; }
}
public class LoadShawarmaDeCarneListCommandHandler : IRequestHandler<LoadShawarmaDeCarneListCommand, int>
{
    private readonly IShawarmaDeCarneService _shawarmaDeCarneServices;
    public LoadShawarmaDeCarneListCommandHandler(IShawarmaDeCarneService shawarmaDeCarneServices)
    {
        _shawarmaDeCarneServices = shawarmaDeCarneServices;
    }
    public async Task<int> Handle(LoadShawarmaDeCarneListCommand request, CancellationToken cancellationToken)
    {
        return await _shawarmaDeCarneServices.LoadAsync(request.base64, cancellationToken);
    }
}
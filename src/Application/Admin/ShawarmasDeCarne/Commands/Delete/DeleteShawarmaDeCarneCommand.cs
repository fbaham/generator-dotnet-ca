namespace Prometheus.Application.Admin.ShawarmasDeCarne.Commands.Delete;
[Authorize(Policy = Permissions.WRITE)]
public record DeleteShawarmaDeCarneCommand : IRequest<Unit>
{
    public int Id { get; set; }
}
public class DeleteShawarmaDeCarneCommandHandler : IRequestHandler<DeleteShawarmaDeCarneCommand, Unit>
{
    private readonly IShawarmaDeCarneService _shawarmaDeCarneServices;
    public DeleteShawarmaDeCarneCommandHandler(IShawarmaDeCarneService shawarmaDeCarneServices)
    {
        _shawarmaDeCarneServices = shawarmaDeCarneServices;
    }
    public async Task<Unit> Handle(DeleteShawarmaDeCarneCommand request, CancellationToken cancellationToken)
    {
        return await _shawarmaDeCarneServices.DeleteAsync(request.Id, cancellationToken);
    }
}

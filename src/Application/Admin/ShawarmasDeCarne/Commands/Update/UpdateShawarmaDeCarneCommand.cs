namespace Prometheus.Application.Admin.ShawarmasDeCarne.Commands.Update;
[Authorize(Policy = Permissions.WRITE)]
public record UpdateShawarmaDeCarneCommand : IRequest<Unit>
{
    /* YOUR CODE */
}
public class UpdateShawarmaDeCarneCommandHandler : IRequestHandler<UpdateShawarmaDeCarneCommand, Unit>
{
    private readonly IShawarmaDeCarneService _shawarmaDeCarneServices;
    public UpdateShawarmaDeCarneCommandHandler(IShawarmaDeCarneService shawarmaDeCarneServices)
    {
        _shawarmaDeCarneServices = shawarmaDeCarneServices;
    }
    public async Task<Unit> Handle(UpdateShawarmaDeCarneCommand request, CancellationToken cancellationToken)
    {
        var obj = new ShawarmaDeCarneDto()
        {
            /* YOUR CODE */
        };
        return await _shawarmaDeCarneServices.UpdateAsync(obj, cancellationToken);
    }
}

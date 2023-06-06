namespace Prometheus.Application.Admin.ShawarmasDeCarne.Commands.Create;
[Authorize(Policy = Permissions.WRITE)] 
public record CreateShawarmaDeCarneCommand : IRequest<int>
{
    /* YOUR CODE */
}

public class CreateShawarmaDeCarneCommandHandler : IRequestHandler<CreateShawarmaDeCarneCommand, int>
{
    private readonly IShawarmaDeCarneService _shawarmaDeCarneServices;
    public CreateShawarmaDeCarneCommandHandler(IShawarmaDeCarneService shawarmaDeCarneServices)
    {
        _shawarmaDeCarneServices = shawarmaDeCarneServices;
    }
    public async Task<int> Handle(CreateShawarmaDeCarneCommand request, CancellationToken cancellationToken)
    {
        var rutObj = Rut.Parse(request.Rut);
        var obj = new CreateShawarmaDeCarneDto()
        {
            /* YOUR CODE */
        };
        return await _shawarmaDeCarneServices.CreateAsync(obj, cancellationToken);
    }
}


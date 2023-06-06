namespace Prometheus.Application.Admin.ShawarmasDeCarne.DTOs;
public class GetShawarmaDeCarneListDto
{
    public GetShawarmaDeCarneListDto()
    {
        ShawarmaDeCarneList = new List<ShawarmaDeCarneDto>();
    }
    public IList<ShawarmaDeCarneDto> ShawarmaDeCarneList { get; set; }
}
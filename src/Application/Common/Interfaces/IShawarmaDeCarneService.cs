namespace Prometheus.Application.Common.Interfaces;
public interface IShawarmaDeCarneService
{
    Task<int> CreateAsync(CreateShawarmaDeCarneDto obj, CancellationToken cancellationToken);
    Task<GetShawarmaDeCarneListDto> GetAsync(int id);
    Task<Unit> UpdateAsync(ShawarmaDeCarneDto obj, CancellationToken cancellationToken);
    Task<Unit> DeleteAsync(int id, CancellationToken cancellationToken);
    Task<int> LoadAsync(string? base64, CancellationToken cancellationToken);
    Task<ExportShawarmaDeCarneListVm> ExportAsync(CancellationToken cancellationToken);
    Task<GetShawarmaDeCarneListDto> FindByParameterAsync(string? parameter);
}
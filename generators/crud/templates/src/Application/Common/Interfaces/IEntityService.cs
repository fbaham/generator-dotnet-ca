using <%= project %>.Application.Admin.<%= plural %>.DTOs;

namespace <%= project %>.Application.Common.Interfaces;
public interface I<%= pascal %>Service
{
    Task<int> CreateAsync(Create<%= pascal %>Dto obj, CancellationToken cancellationToken);
    Task<Get<%= pascal %>ListDto> GetAsync(int id);
    Task<Unit> UpdateAsync(Update<%= pascal %>Dto obj, CancellationToken cancellationToken);
    Task<Unit> DeleteAsync(int id, CancellationToken cancellationToken);
}
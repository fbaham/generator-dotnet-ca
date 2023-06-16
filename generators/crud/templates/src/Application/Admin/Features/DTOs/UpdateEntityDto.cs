using <%= project %>.Application.Admin.<%= plural %>.Commands.Update;

namespace <%= project %>.Application.Admin.<%= plural %>.DTOs;
public class Update<%= pascal %>Dto : IMapFrom<Update<%= pascal %>Command>
{
    public int Id { get; set; }
}
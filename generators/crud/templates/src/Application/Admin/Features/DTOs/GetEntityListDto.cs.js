namespace <%= project %>.Application.Admin.<%= plural %>.DTOs;
public class Get<%= pascal %>ListDto
{
    public Get<%= pascal %>ListDto()
    {
        <%= pascal %>List = new List<<%= pascal %>Dto>();
    }
    public IList<<%= pascal %>Dto> <%= pascal %>List { get; set; }
}
namespace WebUI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class <%= plural %>Controller : ApiControllerBase
{
    [HttpPost("CreateAsync")]
    public async Task<ActionResult<int>> CreateAsync(Create<%= pascal %>Command command)
        => await Mediator.Send(command);
    [HttpGet("GetAsync")]
    public async Task<ActionResult<Get<%= pascal %>ListDto>> GetAsync([FromQuery] Get<%= pascal %>ListQuery query)
        => await Mediator.Send(query);
    [HttpPut("UpdateAsync")]
    public async Task<ActionResult<Unit>> UpdateAsync(Update<%= pascal %>Command command)
        => await Mediator.Send(command);
    [HttpDelete("DeleteAsync")]
    public async Task<ActionResult<Unit>> DeleteAsync(Delete<%= pascal %>Command command)
        => await Mediator.Send(command);
}

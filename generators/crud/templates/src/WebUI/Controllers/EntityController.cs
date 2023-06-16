using MediatR;
using Microsoft.AspNetCore.Mvc;
using <%= project %>.Application.Admin.<%= plural %>.DTOs;
using <%= project %>.Application.Admin.<%= plural %>.Commands.Create;
using <%= project %>.Application.Admin.<%= plural %>.Commands.Delete;
using <%= project %>.Application.Admin.<%= plural %>.Commands.Update;
using <%= project %>.Application.Admin.<%= plural %>.Queries.Get;
using <%= project %>.WebUI.Controllers;

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

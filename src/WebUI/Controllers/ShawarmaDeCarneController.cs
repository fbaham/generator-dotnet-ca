namespace WebUI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ShawarmasDeCarneController : ApiControllerBase
{
    [HttpPost("CreateAsync")]
    public async Task<ActionResult<int>> CreateAsync(CreateShawarmaDeCarneCommand command)
        => await Mediator.Send(command);
    [HttpGet("GetAsync")]
    public async Task<ActionResult<GetShawarmaDeCarneListDto>> GetAsync([FromQuery] GetShawarmaDeCarneListQuery query)
        => await Mediator.Send(query);
    [HttpPut("UpdateAsync")]
    public async Task<ActionResult<Unit>> UpdateAsync(UpdateShawarmaDeCarneCommand command)
        => await Mediator.Send(command);
    [HttpDelete("DeleteAsync")]
    public async Task<ActionResult<Unit>> DeleteAsync(DeleteShawarmaDeCarneCommand command)
        => await Mediator.Send(command);
    [HttpPost("LoadAsync")]
    public async Task<ActionResult<int>> LoadAsync(LoadShawarmaDeCarneListCommand command)
        => await Mediator.Send(command);
    [HttpGet("ExportAsync")]
    public async Task<ActionResult<ExportShawarmaDeCarneListVm>> ExportAsync([FromQuery] ExportShawarmaDeCarneListQuery query)
        => await Mediator.Send(query);
    [HttpGet("FindAsync")]
    public async Task<ActionResult<GetShawarmaDeCarneListDto>> FindAsync([FromQuery] FindShawarmaDeCarneByParameterQuery query)
        => await Mediator.Send(query);
}

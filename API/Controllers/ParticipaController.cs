using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ParticipasController : ControllerBase
{
    private readonly ILogger<ParticipasController> _logger;
    private readonly IParticipaService _ParticipaService;

    /// <summary>
    /// It creates a ParticipaController
    /// </summary>
    /// <param name="logger">used for logging</param>
    /// <param name="ParticipaService">used for dealing with the Participa data</param>
    public ParticipasController(ILogger<ParticipasController> logger, IParticipaService ParticipaService)
    {
        _logger = logger;
        _ParticipaService = ParticipaService;
    }

    /// <summary>
    /// It creates a Participa
    /// </summary>
    /// <param name="baseParticipa">the created Participa <see cref="BaseParticipaDTO"/></param>
    /// <returns>Returns the created Participa <see cref="ParticipaDTO"/></returns>
    [Authorize]
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ParticipaDTO))]
    public ActionResult<ParticipaDTO> Post([FromBody] BaseParticipaDTO baseParticipa)
    {
        JwtID jwtID = JwtID.Instancia();

        baseParticipa.IdUsuario = jwtID.getIdUser();


        return Ok(_ParticipaService.Add(baseParticipa));
    }




}

using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ParticipasController : ControllerBase
{
    private readonly ILogger<ParticipasController> _logger;
    private readonly IParticipaService _ParticipaService;
    private readonly IEventoService _EventoService;

    /// <summary>
    /// It creates a ParticipaController
    /// </summary>
    /// <param name="logger">used for logging</param>
    /// <param name="ParticipaService">used for dealing with the Participa data</param>
    public ParticipasController(ILogger<ParticipasController> logger, IParticipaService ParticipaService, IEventoService EventoService)
    {
        _logger = logger;
        _ParticipaService = ParticipaService;
        _EventoService = EventoService;
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

        baseParticipa.IdUsuario = int.Parse(HttpContext.Request.Headers["X-Login"]);

        if (!_EventoService.isHueco(baseParticipa.IdEvento))
        {
            throw new Exception("Este evento ya esta lleno");
        }

        baseParticipa.CreaOParticipa = false;
        BaseParticipaDTO p = _ParticipaService.Add(baseParticipa);

        _EventoService.ModifyEvent(baseParticipa.IdEvento);

        return Ok(p);
    }

    /// <summary>
    /// Get si el usuaio participa en el evento
    /// </summary>
    /// <param name="baseParticipa">the created Participa <see cref="BaseParticipaDTO"/></param>
    /// <returns>Returns the created Participa <see cref="ParticipaDTO"/></returns>
    [Authorize]
    [HttpGet("{get}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ParticipaDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<ParticipaDTO> Get(int get)
    {

        int idUser = int.Parse(HttpContext.Request.Headers["X-Login"].ToString());


        return Ok(_ParticipaService.getIsParticipo(idUser, get));

    }




}

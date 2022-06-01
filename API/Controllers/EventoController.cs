using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class EventosController : ControllerBase
{
    private readonly ILogger<EventosController> _logger;
    private readonly IEventoService _EventoService;

    private readonly IParticipaService _ParticipaService;


    /// <summary>
    /// It creates a EventoController
    /// </summary>
    /// <param name="logger">used for logging</param>
    /// <param name="EventoService">used for dealing with the Evento data</param>
    /// <param name="ParticipaService">used for dealing with the Evento data</param>
    public EventosController(ILogger<EventosController> logger, IEventoService EventoService, IParticipaService ParticipaService)
    {
        _logger = logger;
        _EventoService = EventoService;
        _ParticipaService = ParticipaService;
    }


    /// <summary>
    /// It returns a Evento by id 
    /// </summary>
    /// <param name="Id">the id of the Evento</param>
    /// <returns>Returns a Evento <see cref="EventoDTO"/></returns>
    [Authorize]
    [HttpGet("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(EventoDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<EventoDTO> Get(int Id)
    {

        loginHelper.isUserId(HttpContext, Id);
        EventoDTO result = _EventoService.GetByID(Id);

        if (result == null)
            return NotFound();

        return Ok(result);

    }

    /// <summary>
    /// It creates a Evento
    /// </summary>
    /// <param name="baseEvento">the created Evento <see cref="BaseEventoDTO"/></param>
    /// <returns>Returns the created Evento <see cref="EventoDTO"/></returns>
    [Authorize]
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(EventoDTO))]
    public ActionResult<EventoDTO> Post([FromBody] BaseEventoDTO baseEvento)
    {
        var idUser = int.Parse(HttpContext.Request.Headers["X-Login"]);

        var evento = _EventoService.Add(baseEvento);

        var eventoId = _EventoService.GetUltimaId();

        BaseParticipaDTO participa = new BaseParticipaDTO();

        participa.IdEvento = eventoId;
        participa.IdUsuario = idUser;
        participa.CreaOParticipa = true;
        _ParticipaService.Add(participa);

        return Ok(evento);


    }



    /// <summary>
    /// Muestra todos los eventos finalizados
    /// </summary>
    /// <returns>Returns a list of <see cref="EventoDTO"/></returns>
    [Authorize]
    [HttpGet]
    [Route("finalizados")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(EventoDTO))]
    public ActionResult<EventoDTO> Get()
    {
        return Ok(_EventoService.GetEventosFinalizados());
    }

}

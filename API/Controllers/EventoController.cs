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
    /// Gestiona los eventos
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
    /// Devuelve el evento por la ID
    /// </summary>
    /// <param name="Id">Id del evento </param>
    /// <returns>Devuelve el evento <see cref="EventoDTO"/></returns>
    [Authorize]
    [HttpGet("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(EventoDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<EventoDTO> Get(int Id)
    {

        EventoDTO result = _EventoService.GetByID(Id);

        if (result == null)
            return NotFound();

        return Ok(result);

    }

    /// <summary>
    /// Creación de evento
    /// </summary>
    /// <param name="baseEvento">Evento creado <see cref="BaseEventoDTO"/></param>
    /// <returns>Devuelve el evento creado <see cref="EventoDTO"/></returns>
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
    /// <returns>Devuelve todos los eventos finalizados <see cref="EventoDTO"/></returns>
    [Authorize]
    [HttpGet]
    [Route("finalizados")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(EventoDTO))]
    public ActionResult<EventoDTO> Get()
    {
        return Ok(_EventoService.GetEventosFinalizados());
    }
}

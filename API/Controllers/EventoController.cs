using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class EventosController : ControllerBase
{
    private readonly ILogger<EventosController> _logger;
    private readonly IEventoService _EventoService;

    /// <summary>
    /// It creates a EventoController
    /// </summary>
    /// <param name="logger">used for logging</param>
    /// <param name="EventoService">used for dealing with the Evento data</param>
    public EventosController(ILogger<EventosController> logger, IEventoService EventoService)
    {
        _logger = logger;
        _EventoService = EventoService;
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
        return Ok(_EventoService.Add(baseEvento));
    }



}

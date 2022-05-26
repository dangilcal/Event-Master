using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ParticipaEventosController : ControllerBase
{
    private readonly ILogger<ParticipaEventosController> _logger;
    private readonly IParticipaEventosService _ParticipaEventosService;



    /// <summary>
    /// It creates a provisionController
    /// </summary>
    /// <param name="logger">used for logging</param>
    /// <param name="ParticipaEventosService">used for dealing with the provision data</param>
    public ParticipaEventosController(ILogger<ParticipaEventosController> logger, IParticipaEventosService ParticipaEventosService)
    {
        _logger = logger;
        _ParticipaEventosService = ParticipaEventosService;
    }


    // Usado para poder mostrar cada producto junto a su precio, ya que se encuentran en tablas diferentes (producto, ParticipaEventos)
    // Solo devuelve un registro con el precio más bajo, no uno por cada ParticipaEventosdor que suministra dicho producto -> TODO

    /// <summary>
    /// Returns all the ParticipaEventos with just the info to show each product with its min price -> TODO 
    /// </summary>
    /// <returns>Returns a list of <see cref="ParticipaEventosDTO"/></returns>
    [Route("participa")]
    [Authorize]
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(EventoDTO))]
    public ActionResult<EventoDTO> GetParticipaEventosProductoActual()
    {
        return Ok(_ParticipaEventosService.GetEventosCreadosOParticipados(int.Parse(HttpContext.Request.Headers["X-Login"])));
    }


    // Usado para mostrar info de ambas tablas (producto y ParticipaEventosdor)

    /// <summary>
    /// Returns all the ParticipaEventos by IdProducto
    /// </summary>
    /// <param name="IdProducto">the id of the producto</param>
    /// <returns>Returns a list of <see cref="ParticipaEventosDTO"/></returns>

    [Route("noparticipa")]
    [Authorize]
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(EventoDTO))]
    public ActionResult<EventoDTO> GetEventosNoParticipados()
    {


        return Ok(_ParticipaEventosService.GetEventosNoParticipados(int.Parse(HttpContext.Request.Headers["X-Login"])));
    }

}
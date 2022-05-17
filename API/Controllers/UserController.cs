using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private readonly ILogger<UsersController> _logger;
    private readonly IUserService _UserService;

    /// <summary>
    /// It creates a UserController
    /// </summary>
    /// <param name="logger">used for logging</param>
    /// <param name="UserService">used for dealing with the User data</param>
    public UsersController(ILogger<UsersController> logger, IUserService UserService)
    {
        _logger = logger;
        _UserService = UserService;
    }

    /// <summary>
    /// Returnea un usuario por su apodo
    /// </summary>
    /// <param name="Id">the id of the User</param>
    /// <returns>Returns a User <see cref="UserDTO"/></returns>
    [Authorize]
    [HttpGet("{apodo}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<UserDTO> Get(String apodo)
    {
        UserDTO result = _UserService.GetByApodo(apodo);

        if (result == null)
            return NotFound();

        return Ok(result);

    }

    /// <summary>
    /// Creacion de Usuario
    /// </summary>
    /// <param name="baseUser">the created User <see cref="BaseUserDTO"/></param>
    /// <returns>Returns the created User <see cref="UserDTO"/></returns>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserDTO))]
    public ActionResult<UserDTO> Post([FromBody] BaseUserDTO baseUser)
    {
        baseUser.PasswordHast = sha.sha256(baseUser.PasswordHast);

        return Ok(_UserService.Add(baseUser));
    }


}

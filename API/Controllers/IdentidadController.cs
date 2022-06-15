using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


[Route("identidad")]
[ApiController]
public class IdentidadController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly ILogger<IdentidadController> _logger;
    private readonly IUserService _identidad;

    public IdentidadController(IConfiguration configuration, ILogger<IdentidadController> logger, IUserService identidad)
    {
        _configuration = configuration;
        _logger = logger;
        _identidad = identidad;
    }


    /// <summary>
    /// Inicio de sesión
    /// </summary>
    /// <returns>Devuelve el token del usuario <see cref="EventoDTO"/></returns>
    [HttpPost]
    [Route("login")]
    public IActionResult Login(BaseUserLoginDTO login)
    {
        var hash = "";
        int userId = 0;
        try
        {
            hash = (_identidad.GetByApodo(login.Apodo)).PasswordHast;
            userId = (_identidad.GetByApodo(login.Apodo)).Id;
        }
        catch
        {
            return BadRequest("Usuario/Contraseña incorrectos");
        }

        try
        {
            login.PasswordHast = sha.sha256(login.PasswordHast);

            //Verifica el usuario y contraseña
            if (login.PasswordHast != hash)
            {
                return BadRequest("Usuario/Contraseña incorrectos");
            }

            //Genera el token
            var token = GenerarToken(login, userId);

            return Ok(new
            {
                response = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }
        catch (Exception e)
        {
            _logger.LogError("Login: " + e.Message, e);
            return StatusCode((int)System.Net.HttpStatusCode.InternalServerError, e.Message);
        }
    }

    private JwtSecurityToken GenerarToken(BaseUserLoginDTO login, int userId)
    {
        string ValidIssuer = _configuration["ApiAuth:Issuer"];
        string ValidAudience = _configuration["ApiAuth:Audience"];
        SymmetricSecurityKey IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["ApiAuth:SecretKey"]));



        //La fecha de expiracion sera el mismo dia a las 12 de la noche
        DateTime dtFechaExpiraToken;
        DateTime now = DateTime.Now;
        dtFechaExpiraToken = new DateTime(now.Year, now.Month, now.Day, 23, 59, 59, 999);

        //Agregamos los claim nuestros
        var claims = new[]
        {
                new Claim("user", login.Apodo),
                new Claim("userId", userId + "")
            };

        return new JwtSecurityToken
        (
            issuer: ValidIssuer,
            audience: ValidAudience,
            claims: claims,
            expires: dtFechaExpiraToken,
            notBefore: now,
            signingCredentials: new SigningCredentials(IssuerSigningKey, SecurityAlgorithms.HmacSha256)
        );
    }
}
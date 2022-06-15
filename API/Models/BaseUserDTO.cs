/// <summary>
/// Modelo base de usuario, se usa para crear usuarios
/// </summary>
public class BaseUserDTO
{

    public string Nombre { get; set; }
    public string Apellidos { get; set; }
    public string Apodo { get; set; }
    public string DNI { get; set; }
    public string Email { get; set; }
    public string PasswordHast { get; set; }

}
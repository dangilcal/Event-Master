/// <summary>
/// Base DTO of the User, used in creation
/// </summary>
public class BaseUserDTO
{

    public string Nombre { get; set; }
    public string Apellidos { get; set; }
    public string Apodo { get; set; }
    public string DNI { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }

}
/// <summary>
/// Base DTO of the Participa Evento, used in creation
/// </summary>
public class BaseParticipaDTO
{
    public int IdUsuario { get; set; }
    public int IdEvento { get; set; }
    public Boolean CreaOParticipa { get; set; }
}
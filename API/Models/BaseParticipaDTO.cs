/// <summary>
/// Modelo base de Participa Evento, usado en la creación
/// </summary>
public class BaseParticipaDTO
{
    public int IdUsuario { get; set; }
    public int IdEvento { get; set; }
    public Boolean CreaOParticipa { get; set; }
}
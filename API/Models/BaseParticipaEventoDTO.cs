/// <summary>
/// Modelo base de Participa Evento, usado en la creación
/// </summary>
public class BaseParticipaEventoDTO
{
    public int IdUsuario { get; set; }
    public int IdEvento { get; set; }
    public Boolean CreaOParticipa { get; set; }
    public String Nombre { get; set; }
    public int NInscripciones { get; set; }
    public int AforoMax { get; set; }
    public String Categoria { get; set; }
    public String Direccion { get; set; }
    public DateTime FechaInicio { get; set; }
    public DateTime FechaFin { get; set; }
    public String Descripcion { get; set; }
    public String Imagen { get; set; }
}
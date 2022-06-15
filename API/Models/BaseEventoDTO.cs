/// <summary>
/// Modelo base de Evento, usado en la creación
/// </summary>
public class BaseEventoDTO
{
    public string Nombre { get; set; }

    public int NInscripciones { get; set; }

    public int AforoMax { get; set; }
    public String Categoria { get; set; }
    public String Direccion { get; set; }

    public DateTime FechaInicio { get; set; }
    public DateTime FechaFin { get; set; }
    public String Descripcion { get; set; }
    public String Imagen { get; set; }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Evento")]
public class EventoEntity
{

    [MaxLength(150)]
    public string Nombre { get; set; }

    public int NInscripciones { get; set; }

    public int AforoMax { get; set; }
    [MaxLength(100)]
    public String Categoria { get; set; }
    [MaxLength(60)]
    public String Direccion { get; set; }

    public DateTime FechaInicio { get; set; }
    public DateTime FechaFin { get; set; }
    public String Descripcion { get; set; }
    [MaxLength(200)]
    public String Imagen { get; set; }
    public int Id { get; set; }

}

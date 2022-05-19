using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Participa")]
public class ParticipaEntity
{


    public int IdUsuario { get; set; }
    public int IdEvento { get; set; }
    public Boolean CreaOParticipa { get; set; }
    public int Id { get; set; }

}

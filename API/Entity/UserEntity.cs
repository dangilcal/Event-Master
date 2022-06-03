using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Usuario")]
public class UserEntity
{
    [MaxLength(50)]
    public string Nombre { get; set; }
    [MaxLength(100)]
    public string Apellidos { get; set; }
    [MaxLength(60)]
    public string Apodo { get; set; }
    [MaxLength(9)]
    public string DNI { get; set; }
    [MaxLength(150)]
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public int Id { get; set; }

}

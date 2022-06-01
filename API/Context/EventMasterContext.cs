using System.Data.Entity;

public class EventMasterContext : DbContext
{
    public EventMasterContext(string connectionString) : base(connectionString)
    { }
    public DbSet<UserEntity> Users { get; set; }
    public DbSet<ParticipaEntity> Participas { get; set; }
    public DbSet<EventoEntity> Eventos { get; set; }


    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}

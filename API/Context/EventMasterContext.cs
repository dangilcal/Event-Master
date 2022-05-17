using System.Data.Entity;

public class EventMasterContext : DbContext
{
    public EventMasterContext(string connectionString) : base(connectionString)
    { }
    public DbSet<BookEntity> Books { get; set; }
    public DbSet<UserEntity> Users { get; set; }


    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}

public class JwtID
{
    private readonly static JwtID _instancia = new JwtID();

    private JwtID()
    {
    }

    public static JwtID Instancia()
    {
        return _instancia;
    }


    private int id;
    public int getIdUser()
    {
        return id;
    }
    public void setIdUser(int idUser)
    {
        id = idUser;
    }
}


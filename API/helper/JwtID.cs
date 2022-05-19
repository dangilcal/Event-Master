public class JwtID
{
    private static int id;
    public static int getIdUser()
    {
        return id;
    }
    public static void serIdUser(int idUser)
    {
        id = idUser;
    }
}


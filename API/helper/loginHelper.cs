public class loginHelper
{

    public static void isUserId(HttpContext context, int id)
    {
        int userId = int.Parse(context.Request.Headers["X-Login"].ToString());

        if (userId != id)
        {
            throw new Exception("No puedes utilizar una Id que no te pertenece");
        }

    }
    public static void isUserName(HttpContext context, string name)
    {
        string userName = context.Request.Headers["X-User"].ToString();

        if (userName != name)
        {
            throw new Exception("No puedes utilizar un apodo que no te pertenece");
        }

    }

}


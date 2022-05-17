using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

/// <summary>
/// This is the service for Users
/// </summary>
public interface IUserService
{
    public UserDTO GetByApodo(String guid);

    public UserDTO Add(BaseUserDTO guid);
}
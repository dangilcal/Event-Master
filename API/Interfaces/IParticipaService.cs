using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

/// <summary>
/// This is the service for Participas
/// </summary>
public interface IParticipaService
{
    public ParticipaDTO Add(BaseParticipaDTO guid);

    public ParticipaDTO getIsParticipo(int idUser, int idEvento);

}
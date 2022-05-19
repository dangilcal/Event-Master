using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

/// <summary>
/// This is the service for Eventos
/// </summary>
public interface IEventoService
{

    public EventoDTO GetByID(int guid);

    public EventoDTO Add(BaseEventoDTO guid);


}
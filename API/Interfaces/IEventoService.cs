using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

/// <summary>
/// This is the service for Eventos
/// </summary>
public interface IEventoService
{

    public EventoDTO GetByID(int guid);
    public IEnumerable<EventoDTO> GetEventosFinalizados();

    public EventoDTO Add(BaseEventoDTO guid);

    public int GetUltimaId();

    public Boolean isHueco(int IdEvento);

    public EventoDTO ModifyEvent(int IdEvento);


}
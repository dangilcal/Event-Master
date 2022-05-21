using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

/// <summary>
/// Interface used for 'ParticipaEventos' service
/// </summary>

public interface IParticipaEventosService
{
    // Usado para poder mostrar cada producto junto a su precio, ya que se encuentran en tablas diferentes (producto, ParticipaEventos)
    public IEnumerable<EventoDTO> GetEventosCreadosOParticipados(int guild);

    // Usado para mostrar info de ambas tablas (producto y ParticipaEventosdor) una vez dentro de los productos
    public IEnumerable<EventoDTO> GetEventosNoParticipados(int guid);

}
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

/// <summary>
/// 'ParticipaEventos' service
/// </summary>

public class ParticipaEventosService : IParticipaEventosService
{
    private readonly EventMasterContext _context;
    private readonly IMapper _mapper;

    public ParticipaEventosService(EventMasterContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // Usado para poder mostrar cada producto junto a su precio, ya que se encuentran en tablas diferentes (producto, ParticipaEventos)



    // Usado para mostrar info de ambas tablas (producto y ParticipaEventosdor)
    public IEnumerable<EventoDTO> GetEventosCreadosOParticipados(int guid)
    {

        DateTime d;
        DateTime now = DateTime.Now;
        d = new DateTime(now.Year, now.Month, now.Day, now.Hour, now.Minute, now.Second);

        return (from Eventos in _context.Eventos
                join Participa in _context.Participas
                on Eventos.Id equals Participa.IdEvento
                where Participa.IdUsuario == guid && Eventos.FechaFin > d

                select new EventoDTO
                {
                    Id = Eventos.Id,
                    Nombre = Eventos.Nombre,
                    NInscripciones = Eventos.NInscripciones,
                    AforoMax = Eventos.AforoMax,
                    Categoria = Eventos.Categoria,
                    Direccion = Eventos.Direccion,
                    FechaInicio = Eventos.FechaInicio,
                    FechaFin = Eventos.FechaFin,
                    Descripcion = Eventos.Descripcion,
                    Imagen = Eventos.Imagen
                });
    }

    public IEnumerable<EventoDTO> GetEventosNoParticipados(int guid)
    {

        DateTime d;
        DateTime now = DateTime.Now;
        d = new DateTime(now.Year, now.Month, now.Day, now.Hour, now.Minute, now.Second);

        var con = from P in _context.Participas where P.IdUsuario == guid select P.IdEvento;

        return (from Eventos in _context.Eventos
                join Participa in _context.Participas
                on Eventos.Id equals Participa.IdEvento
                where Eventos.FechaFin > d && !con.Contains(Participa.IdEvento) && Eventos.AforoMax > Eventos.NInscripciones
                select new EventoDTO
                {
                    Id = Eventos.Id,
                    Nombre = Eventos.Nombre,
                    NInscripciones = Eventos.NInscripciones,
                    AforoMax = Eventos.AforoMax,
                    Categoria = Eventos.Categoria,
                    Direccion = Eventos.Direccion,
                    FechaInicio = Eventos.FechaInicio,
                    FechaFin = Eventos.FechaFin,
                    Descripcion = Eventos.Descripcion,
                    Imagen = Eventos.Imagen
                });
    }


}
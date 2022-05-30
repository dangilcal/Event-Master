using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class EventoService : IEventoService
{
    private readonly EventMasterContext _context;
    private readonly IMapper _mapper;

    public EventoService(EventMasterContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public EventoDTO Add(BaseEventoDTO baseEvento)
    {
        var _mappedEvento = _mapper.Map<EventoEntity>(baseEvento);
        var entityAdded = _context.Eventos.Add(_mappedEvento);
        _context.SaveChanges();

        return _mapper.Map<EventoDTO>(entityAdded);
    }


    public EventoDTO GetByID(int guid)
    {
        return _mapper.Map<EventoDTO>(_context.Eventos.FirstOrDefault(x => x.Id == guid));
    }


    public IEnumerable<EventoDTO> GetEventosFinalizados()
    {
        DateTime d;
        DateTime now = DateTime.Now;
        d = new DateTime(now.Year, now.Month, now.Day, now.Hour, now.Minute, now.Second);
        return _mapper.Map<IEnumerable<EventoDTO>>(_context.Eventos.Where(x => x.FechaFin < d));
    }

    public int GetUltimaId()
    {
        return _context.Eventos.OrderByDescending(x => x.Id).Take(1).FirstOrDefault().Id;
    }

    public Boolean isHueco(int IdEvento)
    {
        EventoDTO e = _mapper.Map<EventoDTO>(_context.Eventos.FirstOrDefault(x => x.Id == IdEvento));

        return e.AforoMax > e.NInscripciones;
    }

    public EventoDTO ModifyEvent(int IdEvento)
    {
        var _mappedEvento = _mapper.Map<EventoEntity>(_mapper.Map<EventoDTO>(_context.Eventos.FirstOrDefault(x => x.Id == IdEvento)));
        _mappedEvento.NInscripciones = _mappedEvento.NInscripciones + 1;

        EventoEntity evento = _context.Eventos.FirstOrDefault(x => x.Id == IdEvento);

        if (evento == null)
            return null;

        _context.Entry(evento).CurrentValues.SetValues(_mappedEvento);

        _context.SaveChanges();

        return _mapper.Map<EventoDTO>(_mappedEvento);
    }

}
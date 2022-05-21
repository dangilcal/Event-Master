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


}
using AutoMapper;

public class EventoProfile : Profile
{
    public EventoProfile()
    {
        CreateMap<EventoDTO, EventoEntity>();
        CreateMap<EventoEntity, EventoDTO>();
        CreateMap<BaseEventoDTO, EventoEntity>();
        CreateMap<EventoEntity, BaseEventoDTO>();
    }
}

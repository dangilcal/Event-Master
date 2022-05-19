using AutoMapper;

public class ParticipaProfile : Profile
{
    public ParticipaProfile()
    {
        CreateMap<ParticipaDTO, ParticipaEntity>();
        CreateMap<ParticipaEntity, ParticipaDTO>();
        CreateMap<BaseParticipaDTO, ParticipaEntity>();
        CreateMap<ParticipaEntity, BaseParticipaDTO>();
    }
}

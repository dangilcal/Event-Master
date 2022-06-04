using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class ParticipaService : IParticipaService
{
    private readonly EventMasterContext _context;
    private readonly IMapper _mapper;

    public ParticipaService(EventMasterContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public ParticipaDTO Add(BaseParticipaDTO baseParticipa)
    {
        var _mappedParticipa = _mapper.Map<ParticipaEntity>(baseParticipa);
        var entityAdded = _context.Participas.Add(_mappedParticipa);
        _context.SaveChanges();
        return _mapper.Map<ParticipaDTO>(entityAdded);
    }

    public ParticipaDTO getIsParticipo(int idUser, int idEvento)
    {

        return _mapper.Map<ParticipaDTO>(_context.Participas.FirstOrDefault(x => (x.IdUsuario == idUser) && (x.IdEvento == idEvento)));

    }

}
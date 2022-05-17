using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class UserService : IUserService
{
    private readonly EventMasterContext _context;
    private readonly IMapper _mapper;

    public UserService(EventMasterContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public UserDTO Add(BaseUserDTO baseUser)
    {
        var _mappedUser = _mapper.Map<UserEntity>(baseUser);
        var entityAdded = _context.Users.Add(_mappedUser);
        _context.SaveChanges();
        return _mapper.Map<UserDTO>(entityAdded);
    }


    public UserDTO GetByApodo(String guid)
    {
        return _mapper.Map<UserDTO>(_context.Users.FirstOrDefault(x => x.Apodo == guid));
    }


}
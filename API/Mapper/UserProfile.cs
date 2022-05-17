using AutoMapper;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<UserDTO, UserEntity>();
        CreateMap<UserEntity, UserDTO>();
        CreateMap<BaseUserDTO, UserEntity>();
        CreateMap<UserEntity, BaseUserDTO>();
    }
}

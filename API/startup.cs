using System.Reflection;
using AutoMapper;
using WebApi.Helpers;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllersWithViews();
        services.AddTransient<EventMasterContext>(_ =>
            new EventMasterContext(Configuration.GetConnectionString("DefaultConnection")));

        services.AddSwaggerGen(options =>
        {
            var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
            var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
            options.IncludeXmlComments(xmlPath);
        });

        var mapperConfig = new MapperConfiguration(mc =>
        {
            mc.AddProfile(new BookProfile());
            mc.AddProfile(new UserProfile());
            mc.AddProfile(new ParticipaProfile());
            mc.AddProfile(new EventoProfile());
        });

        IMapper mapper = mapperConfig.CreateMapper();
        services.AddSingleton(mapper);

        services.AddTransient<IBookService, BookService>();
        services.AddTransient<IUserService, UserService>();
        services.AddTransient<IParticipaService, ParticipaService>();
        services.AddTransient<IEventoService, EventoService>();
        services.AddTransient<IParticipaEventosService, ParticipaEventosService>();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseMiddleware<JwtMiddleware>();

        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI();

        }
        else
        {
            app.UseExceptionHandler("/Home/Error");
            app.UseHsts();
        }

        app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());


        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");
        });
    }


}

using SchoolChessClub.System.Interface;
using SchoolChessClub.System.Support;

namespace SchoolChessClub.WebApi;

public static class IServiceCollectionExtensions
{
    public static IServiceCollection RegisteringDependency(this IServiceCollection services)
    {
        services.AddControllers();

        return services
            .AddEndpointsApiExplorer()
            .AddSwaggerGen()
            .AddScoped<ITime, Time>();
    }
}

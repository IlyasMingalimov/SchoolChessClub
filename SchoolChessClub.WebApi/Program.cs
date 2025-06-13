namespace SchoolChessClub.WebApi;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.RegisteringDependency();

        var app = builder.Build();
        app.MapControllers();

        //if (app.Environment.IsDevelopment())
        //{
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "SchoolChessClub API V1");
                c.RoutePrefix = string.Empty;});
        //}

        app.Run();
    }
}

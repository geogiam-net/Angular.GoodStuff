using Demo.Archivero.Api;
using Demo.Archivero.Api.Endpoints;
using Microsoft.OpenApi;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("web",
        policy => policy
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowAnyOrigin());
});

builder.Services.AddProblemDetails();

// ------------------------------------------------------------------------------------

var app = builder.Build();

app.UseCors("web");

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    //options.RoutePrefix = "swagger";
});

app.UseAuthentication();
app.UseAuthorization();

// UseStatusCodePages enables middleware that provides default responses for HTTP status codes
// (like 404, 400, 500) when your API does not return a body
app.UseStatusCodePages();
app.UseExceptionHandler();

app.MapAuthEndpoints();

app.MapGet(Routes.Health, () => Results.Ok(new
{
    status = "ok",
    service = "Angular.GoodStuff API is up"
}));

app.Run();

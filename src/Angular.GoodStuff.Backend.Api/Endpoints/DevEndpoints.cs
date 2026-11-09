
namespace Demo.Archivero.Api.Endpoints;

public static class DevEndpoints
{
    public static IEndpointRouteBuilder MapDevEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/api/health", GetHealth);

        return app;
    }
    private static IResult GetHealth()
    {
        return Results.Ok("Service is running oaky!");
    }

    //private static async Task<IResult> Login(
    //    LoginRequestDto request,
    //    IAuthService auth,
    //    CancellationToken ct)
    //{
    //    var result = await auth.LoginAsync(
    //        request.Username,
    //        request.Password,
    //        ct);

    //    return ResultDtoResultMapper.ToHttpResult(
    //        result,
    //        employee => TypedResults.Ok(result.Result));
    //}


}

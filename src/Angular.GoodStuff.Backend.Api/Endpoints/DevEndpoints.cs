
using Angular.GoodStuff.Backend.Api.Dtos;

namespace Demo.Archivero.Api.Endpoints;

public static class DevEndpoints
{
    private static List<User> users =
        [
            new() { Id = 1, Name = "Alex Morgan", Age = 28 },
            new() { Id = 2, Name = "Jamie Chen", Age = 34 },
            new() { Id = 3, Name = "Taylor Patel", Age = 22 },
            new() { Id = 4, Name = "Jordan Rivera", Age = 41 },
            new() { Id = 5, Name = "Casey Kim", Age = 30 },
            new() { Id = 6, Name = "Riley Thompson", Age = 25 },
            new() { Id = 7, Name = "Avery Garcia", Age = 37 },
            new() { Id = 8, Name = "Morgan Lee", Age = 19 },
            new() { Id = 9, Name = "Quinn Wilson", Age = 46 },
            new() { Id = 10, Name = "Drew Martin", Age = 32 }
        ];

    private static List<Article> articles =
        [
            new() { Id = 1, Name = "Getting Started with C#", Description = "A practical introduction to modern C#.", Color = "rojo" },
            new() { Id = 2, Name = "Designing REST APIs", Description = "Patterns for building clear and reliable HTTP APIs.", Color = "rojo" },
            new() { Id = 3, Name = "Understanding TypeScript", Description = "Explore types, interfaces, and safer JavaScript.", Color = "verde" },
            new() { Id = 4, Name = "A Guide to Angular Components", Description = "Build reusable UI with standalone components.", Color = "azul" },
            new() { Id = 5, Name = "Database Basics", Description = "Learn how relational databases organize information.", Color = "verde" },
            new() { Id = 6, Name = "Clean Code Habits", Description = "Small practices that make code easier to maintain.", Color = "rojo" },
            new() { Id = 7, Name = "Testing Web Applications", Description = "An overview of useful testing strategies.", Color = "rojo" },
            new() { Id = 8, Name = "Getting Started with Docker", Description = "Package an application and its dependencies in containers.", Color = "azul" },
            new() { Id = 9, Name = "Git for Teams", Description = "A simple workflow for collaborating with version control.", Color = "rojo" },
            new() { Id = 10, Name = "Web Accessibility Essentials", Description = "Make interfaces work for more people.", Color = "verde" }
        ];

    public static IEndpointRouteBuilder MapDevEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/api/health", GetHealth);

        app.MapGet("/api/not-found", GetNotFoundError);
        app.MapGet("/api/bad-request", GetBadRequestError);
        app.MapGet("/api/delay", GetDelay);

        app.MapGet("/api/users", GetUsers);
        app.MapPut("/api/users", EditUser);

        app.MapPost("/api/articles", CreateArticle);
        app.MapGet("/api/articles", GetArticles);
        app.MapPut("/api/articles/{id}", EditArticle);

        return app;
    }

    private static IResult GetHealth()
    {
        return Results.Ok("Service is running oaky!");
    }

    private static IResult GetNotFoundError()
    {
        return Results.NotFound("Resource not found");
    }

    private static IResult GetBadRequestError()
    {
        return Results.BadRequest("Bad request");
    }

    private static IResult GetDelay()
    {
        // Simulate a delay of 5 seconds for testing purposes
        Thread.Sleep(5000);
        return Results.Ok();
    }

    private static IResult GetUsers()
    {
        return Results.Ok(users);
    }

    private static IResult EditUser(
        User request,
        CancellationToken ct)
    {
        if (string.IsNullOrWhiteSpace(request.Name))
        {
            return Results.BadRequest("User name can not be empty");
        }

        var existingUser = users.FirstOrDefault(p => p.Name.Equals(request.Name, StringComparison.OrdinalIgnoreCase));
        if (existingUser is null)
        {
            return Results.NotFound("User not found");
        }

        existingUser.Name = request.Name;
        existingUser.Age = request.Age;

        return TypedResults.Ok();
    }

    private static IResult CreateArticle(
        Article request,
        CancellationToken ct)
    {
        if (string.IsNullOrWhiteSpace(request.Name))
        {
            return Results.BadRequest("Article name can not be empty");
        }

        var exists = articles.FirstOrDefault(p=> p.Name.Equals(request.Name, StringComparison.OrdinalIgnoreCase)) != null;
        if (exists)
        {
            return Results.Conflict("Article already exists");
        }

        var nextId = articles.Max(p => p.Id) + 1;
        request.Id = nextId;

        articles.Add(request);

        return TypedResults.Ok();
    }

    private static IResult GetArticles()
    {     
        return Results.Ok(articles);
    }

    private static IResult EditArticle(
        int id,
        string name,
        CancellationToken ct)
    {
        if (string.IsNullOrWhiteSpace(name))
        {
            return Results.BadRequest("Article name can not be empty");
        }

        var existingArticle = articles.FirstOrDefault(p => p.Id == id);
        if (existingArticle is null)
        {
            return Results.NotFound("Article not found");
        }

        existingArticle.Name = name;

        return TypedResults.Ok();
    }
}

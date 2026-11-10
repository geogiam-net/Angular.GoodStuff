namespace Angular.GoodStuff.Backend.Api.Dtos
{
    public class Article
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string? Description { get; set; }
        public string Color { get; set; } = "";
    }
}

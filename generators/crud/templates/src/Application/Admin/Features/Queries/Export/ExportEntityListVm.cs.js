namespace <%= project %>.Application.Admin.<%= plural %>.Queries.Export<%= plural %>;
public class Export<%= pascal %>ListVm
{
    public Export<%= pascal %>ListVm(string fileName, string contentType, byte[] content)
    {
        FileName = fileName;
        ContentType = contentType;
        Content = content;
    }
    public string FileName { get; set; }
    public string ContentType { get; set; }
    public byte[] Content { get; set; }
}
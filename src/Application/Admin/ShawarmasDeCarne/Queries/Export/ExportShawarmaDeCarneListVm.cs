namespace Prometheus.Application.Admin.ShawarmasDeCarne.Queries.ExportShawarmasDeCarne;
public class ExportShawarmaDeCarneListVm
{
    public ExportShawarmaDeCarneListVm(string fileName, string contentType, byte[] content)
    {
        FileName = fileName;
        ContentType = contentType;
        Content = content;
    }
    public string FileName { get; set; }
    public string ContentType { get; set; }
    public byte[] Content { get; set; }
}
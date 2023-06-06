namespace Prometheus.Infrastructure.Files.Maps;
public class ShawarmaDeCarneRecordMap : ClassMap<ShawarmaDeCarneFileRecord>
{
    public ShawarmaDeCarneRecordMap()
    {
        AutoMap(CultureInfo.InvariantCulture);
    }
}
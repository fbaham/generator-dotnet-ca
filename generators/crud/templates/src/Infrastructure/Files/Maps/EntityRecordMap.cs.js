namespace <%= project %>.Infrastructure.Files.Maps;
public class <%= pascal %>RecordMap : ClassMap<<%= pascal %>FileRecord>
{
    public <%= pascal %>RecordMap()
    {
        AutoMap(CultureInfo.InvariantCulture);
    }
}
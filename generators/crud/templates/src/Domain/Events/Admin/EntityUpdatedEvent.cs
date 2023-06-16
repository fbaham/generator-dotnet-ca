namespace <%= project %>.Domain.Events.Admin;
public class <%= pascal %>UpdatedEvent : DomainEvent
{
    public <%= pascal %>UpdatedEvent(<%= pascal %> obj)
    {
        Obj = obj;
    }
    public <%= pascal %> Obj { get; }
}
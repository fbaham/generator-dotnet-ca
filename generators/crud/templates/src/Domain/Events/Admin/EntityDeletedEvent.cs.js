namespace <%= project %>.Domain.Events.Admin;
public class <%= pascal %>DeletedEvent : DomainEvent
{
    public <%= pascal %>DeletedEvent(<%= pascal %> obj)
    {
        Obj = obj;
    }
    public <%= pascal %> Obj { get; }
}
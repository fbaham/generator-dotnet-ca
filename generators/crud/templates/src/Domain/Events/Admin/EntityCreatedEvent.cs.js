namespace <%= project %>.Domain.Events.Admin;
public class <%= pascal%>CreatedEvent : DomainEvent
{
    public <%= pascal %>CreatedEvent(<%= pascal %> obj)
    {
        Obj = obj;
    }
    public <%= pascal %> Obj { get; }
}

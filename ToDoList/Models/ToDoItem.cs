namespace ToDoList.Models
{

    public class ToDoItem 
    {
        public string Id { get; set; }
        public int Priority { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsDeleted { get; set; }  
    }
    
}
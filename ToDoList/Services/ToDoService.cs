using System.Collections.Generic;
using System.Linq;
using ToDoList.Models;

namespace ToDoList.Services
{
    public class ToDoService : IToDoService 
    {
        private static List<ToDoItem> _todoList = new List<ToDoItem>();
        public ToDoService(){ }

        public ToDoItem Add(ToDoItem item)
        {
            _todoList.Add(item);
            return item;
        }
        
        // Deletes a ToDoItem
        public bool Delete(ToDoItem item)
        {
            var exists = _todoList.Find(i => i.Id == item.Id);
            if(exists == null) return false;
            _todoList.Remove(exists);
            return true;
        }

        // Gets all ToDoItems
        public List<ToDoItem> GetAll()
        {
            var orderedList = _todoList.OrderBy(i => i.Priority).ToList();
            return orderedList;
        }

        // Updates ToDoItem
        public bool Update(ToDoItem item)
        {
            var exists = _todoList.Find(i => i.Id == item.Id);
            if(exists == null) return false;
            exists.IsCompleted = item.IsCompleted;
            return true;
        }
    }
}

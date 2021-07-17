using System.Collections.Generic;
using ToDoList.Models;

namespace ToDoList.Services
{
    public interface IToDoService 
    {
        ToDoItem Add(ToDoItem item);
        List<ToDoItem> GetAll();

        bool Update(ToDoItem item);

        bool Delete(ToDoItem item);
    }
}
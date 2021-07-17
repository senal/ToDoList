
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;
using ToDoList.Services;

namespace ToDoList.Controllers
{


    [ApiController]
    [Route("api/[controller]")]
    public class ToDoController : ControllerBase {

        private readonly IToDoService _toDoService;

        public ToDoController(IToDoService toDoService)
        {
            _toDoService = toDoService;    
        }


       [HttpGet]
        public ActionResult<IEnumerable<ToDoItem>> Get()
        {
            return _toDoService.GetAll();
        }

        [HttpPost]
        public ActionResult<ToDoItem> Create(ToDoItem item)
        {
            return _toDoService.Add(item);
        }

        [HttpPut]
        public ActionResult<bool> Update(ToDoItem item)
        {
            return _toDoService.Update(item);
        }

        [HttpDelete]
        public ActionResult<bool> Delete(ToDoItem item)
        {
            return _toDoService.Delete(item);
        }

    }
}

# ToDo List [![ToDo List CI/CD](https://github.com/senal/ToDoList/actions/workflows/todo-cicd.yaml/badge.svg)](https://github.com/senal/ToDoList/actions/workflows/todo-cicd.yaml)



## Objective
A ToDo List is a list of tasks that you need to complete, or things that you want to do. Most
typically, they are **organised** in order of priority.

#### The application should support the following functionalities:
   - Add an item to the list.
   - Mark an item as completed.
   - Delete an item from the list.

## project structure

```C#
ToDoList (root)
| -ToDoList
| |-ClientApp
|    |-src
|      |-features 
|        |-todo             
| |-Controllers
| |   -ToDoController.cs
| |-Services
| |   -IToDoService.cs
| |   -ToDoService.cs
| |-Models
| |  -ToDoItem.cs
|
|-ToDoList.Tests
| |-ToDoServiceTests.cs
|
```
## How to
**Note:** It's require to clone the project in local machine.
```git
git clone https://github.com/senal/ToDoList.git
```

### Run with Visual Studio:
- Build the project locally. Make sure no build errors. Note that this action may take several minutes as it's required to download all the dependent node modules.
- Hit **F5** to run the project in IIS Express.

### Run with Docker:

**Note:** Assume the docker desktop installed on the local machine.

- Make sure the build succeeded.
- move into ToDoList\ToDoList folder.
- run 
```cmd
docker build -t my/todolist .
```
upon success, run the following command
```cmd
docker run -d -p 5000:80 my/todolist todolist
```

- Open a browser, type localhost:5000 to view the application running in Docker container.

### Run unit tests:
- Make sure the build succeeded.
- Move into ToDoList\ToDoList.Tests project and run the following command
```cmd
dotnet test
```
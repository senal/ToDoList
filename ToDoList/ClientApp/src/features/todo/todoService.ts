import IToDoItem from "./IToDoItem";


export const fetchTodos = async ():Promise<IToDoItem[]> => {
    const response = await fetch('api/todo')
    const todos = await response.json();
    return todos;     
}

export const createTodo = async (item: IToDoItem): Promise<IToDoItem> => {
    const response = await fetch('api/todo', {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
    const todos = await response.json();
    return todos;     
}

export const updateTodo = async (item: IToDoItem): Promise<boolean> => {
    const response = await fetch('api/todo', {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
    const feedback = await response.json();
    return feedback;
}

export const deleteTodo = async (item: IToDoItem): Promise<boolean> => {
    const response = await fetch('api/todo', {
        method: "DELETE",
        body: JSON.stringify(item),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
    const feedback = await response.json();
    return feedback;
}
import React, {useEffect, useState, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';

import IToDoItem from './IToDoItem';
import ToDoHeading from './ToDoHeading';
import ToDoList from './ToDoList';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './todoService';
import './ToDo.css';

const createDefaultItem = (description: string, priority: number = 3): IToDoItem => {
    return {
        id: uuidv4(),
        priority,
        description,
        isCompleted: false,
        isDeleted: false,    
    }
}

const ToDoForm = () => {

// local states
const [items, setItems] = useState([] as IToDoItem[]);
const [description, setDescription] = useState("");
const [priority, setPriority] = useState<number>(3);

const inputDescription = useRef<HTMLInputElement>(null);


const setFocus = () => {
    inputDescription.current?.focus();
}

const sortByPriority = (a: IToDoItem, b: IToDoItem) => {
    return a.priority - b.priority;
}

const getSortedList = (list: IToDoItem[]) => {
    return list.sort(sortByPriority);
}

const onAdd = async () => {
    const newItem = createDefaultItem(description, priority);
    const itemFromDb = await createTodo(newItem);
    const sortedList = getSortedList([...items, itemFromDb]);
    setItems([...sortedList]);
    // cler description 
    setDescription("");
    setPriority(3);
    setFocus();
}

const onDelete = async (item: IToDoItem) => {
    const feedback = await deleteTodo(item);
    if(feedback){
        const list = items.filter(i => i.id !== item.id);
        const sortedList = getSortedList(list);
        setItems([...sortedList]);
    }
};

const onComplete = async (item: IToDoItem) => {
    item.isCompleted = true;
    const feedback = await updateTodo(item);
    if(feedback){
        const list = items.filter(i => i.id !== item.id);
        const sortedList = getSortedList([...list, item]);
        setItems([...sortedList]);
    }
};

useEffect(() => {
    const fetchData = async () => {
        const data = await fetchTodos();
        setItems(data);
    }
    fetchData();
    setFocus();
    
}, []);

const highPriority = () => {
    return priority === 1 ? "btn-danger btn-circle btn-sm" : "btn btn-outline-danger btn-circle btn-sm" 
}

const mediumPriority = () => {
    return priority === 2 ? "btn btn-warning btn-circle btn-sm" : "btn btn-outline-warning btn-circle btn-sm" 
}

const lowPriority = () => {
    return priority === 3 ? "btn btn-success btn-circle btn-sm" : "btn btn-outline-success btn-circle btn-sm" 
}


return (<div>
    <ToDoHeading />
    <div className="row g-3 centered p-3">
        <div className="col-2"></div>
        <div className="col-7">
            <input className="form-control" type="text" ref={inputDescription} value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div className="col-1">
            <div>
            <span ><button onClick={() => setPriority(1)} className={highPriority()}>H</button></span>
            <span className="priority-p"><button onClick={() => setPriority(2)} className={mediumPriority()}>M</button></span>
            <span ><button onClick={() => setPriority(3)} className={lowPriority()}>L</button></span>
            </div>
        </div>    
        <div className="col-2">
            <button className="btn btn-primary mb-3" onClick={() => onAdd()}>Add</button>
        </div>
    </div>
    <ToDoList items={items} onComplete={onComplete} onDelete={onDelete} />
</div>);

}

export default React.memo(ToDoForm);
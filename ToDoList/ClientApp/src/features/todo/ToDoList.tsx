import React from 'react'
import IToDoItem from './IToDoItem';
import ToDoListItem from './ToDoListItem';

interface IToDoListProps {
    items: IToDoItem[]
    onDelete: (item: IToDoItem) => void;
    onComplete: (item: IToDoItem) => void;
}

const ToDoList = (props: IToDoListProps) => {

    const {items, onDelete, onComplete} = props;

    return (<div>{items.map(i => {
        return <ToDoListItem key={i.id} item={i} onComplete={onComplete} onDelete={onDelete} />
    })}</div>)
}

export default React.memo(ToDoList);
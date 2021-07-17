import React from 'react';
import IToDoItem from './IToDoItem';
import './ToDo.css';


interface IToDoListItemProps {
    item: IToDoItem
    onDelete: (item: IToDoItem) => void;
    onComplete: (item: IToDoItem) => void;
}

const ToDoListItem = (props: IToDoListItemProps) => {

    const {item, onDelete, onComplete } = props

    const getPriorityBadgeClass = (item: IToDoItem) => {
        if(item.priority === 1)
            return <button disabled className="btn btn-danger btn-circle btn-sm">H</button>;
        if(item.priority === 2)
            return <button disabled className="btn btn-warning btn-circle btn-sm">M</button>;

        return <button disabled className="btn btn-success btn-circle btn-sm">L</button>;
    }

    return (
        <div>
            <div className="row p-2 g-3 centered">
                <div className="col-2"></div>
                <div className="col-1">{ item.isCompleted? <button disabled type="button" className="btn btn-outline-success"><i  title="Completed" className="bi bi-check2-square"></i></button>  : <button   onClick={ () => onComplete(item)} type="button" className="btn btn-outline-info"> <i title="Click to complete" className="bi bi-square"  ></i></button>}</div>
                <div className="col-5">{!item.isCompleted ? <p>{item.description}</p> : <span><del><em>{item.description}</em></del></span>} </div>
                <div className="col-1">{getPriorityBadgeClass(item)}</div>
                <div className="col-1"><button onClick={() => onDelete(item)}  className="btn btn-outline-danger"  ><i className="bi bi-trash"></i></button></div>
                <div className="col-2"></div>
            </div>
            <div className="row pd-2 g-3 centered">
            <div className="col-2 "></div>
            <div className="col-8 border-bottom"></div>
            <div className="col-2"></div>
            </div>
        </div>
    );
}

export default ToDoListItem;
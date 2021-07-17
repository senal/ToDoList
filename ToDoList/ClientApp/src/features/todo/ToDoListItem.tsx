import React from 'react';
import IToDoItem from './IToDoItem';


interface IToDoListItemProps {
    item: IToDoItem
    onDelete: (item: IToDoItem) => void;
    onComplete: (item: IToDoItem) => void;
}

const ToDoListItem = (props: IToDoListItemProps) => {

    const {item, onDelete, onComplete } = props

    return (
        <div>
            <div className="row p-2 g-3 centered">
                <div className="col-3"></div>
                <div className="col-1">{ item.isCompleted? <button disabled type="button" className="btn btn-outline-success"><i  className="bi bi-check2-square"></i></button>  : <button   onClick={ () => onComplete(item)} type="button" className="btn btn-outline-info"> <i className="bi bi-square"  ></i></button>}</div>
                <div className="col-4">{!item.isCompleted ? <p>{item.description}</p> : <span><del><em>{item.description}</em></del></span>} </div>
                <div className="col-1"><button onClick={() => onDelete(item)}  className="btn btn-outline-danger"  ><i className="bi bi-trash"></i></button></div>
                <div className="col-3"></div>
            </div>
            <div className="row pd-2 g-3 centered">
            <div className="col-3"></div>
            <div className="col-6 border-bottom"></div>
            <div className="col-3"></div>
            </div>      
        </div>
    );
}

export default ToDoListItem;
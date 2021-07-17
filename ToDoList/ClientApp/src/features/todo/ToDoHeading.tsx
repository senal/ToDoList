import React from 'react';

const ToDoHeading = () => {

    return (<p className="display-4 text-center">ToDo <span className="fs-2 fw-light">List</span></p>);
}

export default React.memo(ToDoHeading);
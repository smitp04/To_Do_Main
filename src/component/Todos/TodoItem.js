import './TodoItem.css';

import TodoDate from './TodoDate';
// import deleteImage from 'public/delete.png';
const TodoItem = (props) => {
    let statusTag=<div className="todoItem_status pending">Pending</div>;
    if(props.status)
        statusTag=<div className="todoItem_status completed">Completed</div>;

    const deleteTodo=(event)=>{
        props.deleteCurrentTodo(props.id);
    }

    const changeStatus=()=>{
        props.onChangeStatus(props.id);
    }

    return (
        <div className="todo-container">
            
            <TodoDate deadline={props.deadline}/>
            <div className="todo-details">
                <div className="todo_title">{props.title}</div>
                    <div className="todoItem-condition">
                        {statusTag}
                        { 
                            props.status ? 
                            <input type="checkbox" checked onChange={changeStatus}></input>:
                            <input type="checkbox" onChange={changeStatus} ></input>
                        }
                        
                        <button onClick={deleteTodo} className="delete_btn">Delete</button>
                </div>
            </div>
            
        </div>
    );
};

export default TodoItem;
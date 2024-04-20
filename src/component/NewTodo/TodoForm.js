import React,{useState} from 'react';
import './TodoForm.css';

const TodoForm = (props) =>{
    const [enteredTitle,setTitle]= useState('');
    const [enteredDeadline,setDeadline]=useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const deadlineHandler = (event) => {
        setDeadline(event.target.value);
    }

    const addTodoHandler = (event) =>{
        event.preventDefault();
        
        if(enteredTitle.length>0){
            const newTodo={
                id:Math.random().toString(),
                title:enteredTitle,
                deadline:new Date(enteredDeadline),
                status:false,
            }
    
            setDeadline('');
            setTitle('');
            props.onChange(newTodo);
        }
        setDeadline('');
        setTitle('');
    
    }

    return (
        <form onSubmit={addTodoHandler}>
            <div className="add-todo_form">
                <div className="new-todo_inputs">
                    <div className="todo_input_box">
                        <label>Title</label>
                        <input type="text" placeholder='Todo Title' value={enteredTitle} className="todo_inputs" onChange={titleHandler}></input>
                    </div>
                    <div className="todo_input_box">
                        <label>Deadline</label>
                        <input type="date" value={enteredDeadline} min="2019-01-01" max="2022-31-12" className="todo_inputs" required onChange={deadlineHandler}></input>
                    </div>
                </div>
                <div className="new-todo_actions">
                    <button type="button" onClick={props.onCancel} className="action_btn">cancel</button>
                    <button type="submit" className="action_btn">Add Todo</button>
                </div>
            </div>
        </form>
    );
};

export default TodoForm;
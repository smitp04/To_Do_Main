import React,{useState} from 'react';
import './NewTodo.css';
import TodoForm from './TodoForm';

const NewTodo = (props) =>{
    const [isEditing,setIsEditing]=useState(false);

    const addTodoHandler = (newTodo)=>{
        props.onNewTodoEntered(newTodo);
        setIsEditing(false);
    }

    function showForm(){
        setIsEditing(true);
    }

    function showCancelForm(){
        setIsEditing(false);
    }
    
    return (
        <div className="new-todo_container">
            {!isEditing && <button className="new-todo_btn" onClick={showForm}>Add Todo</button>}
            {isEditing && <TodoForm onCancel={showCancelForm} onChange={addTodoHandler}/>}
        </div>
    );
};

export default NewTodo;
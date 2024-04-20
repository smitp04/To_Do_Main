import './Todos.css';
import TodoItem from './TodoItem';
const Todos = (props) => {
    const deleteTodo = (id) => {
        props.onDeleteTodo(id);
    }

    const updateStatus = (id) => {
        props.onchangeStatus(id);
    }

    return (

        <div className="todos-main_container">
            {
                props.todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        deadline={todo.deadline}
                        status={todo.status}
                        deleteCurrentTodo={deleteTodo}
                        onChangeStatus={updateStatus}
                    />
                ))
            }
        </div>

    );
};

export default Todos;
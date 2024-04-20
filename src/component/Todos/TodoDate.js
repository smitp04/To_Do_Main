import './TodoDate.css';

const TodoDate = (props) => {
    const day=props.deadline.toLocaleString('default',{day:'numeric'});
    const month=props.deadline.toLocaleString('default',{month:'short'});
    const year=props.deadline.getFullYear();

    return (
        <div className="todo-deadline_date">
            <div className="todo-deadline_day">{day}</div>
            <div className="todo-deadline_month">{month}</div>
            <div className="todo-deadline_year">{year}</div>
        </div>
    );
};

export default TodoDate;
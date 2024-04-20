import React,{useState} from 'react';

import Todos from './component/Todos/Todos';
import NewTodo from './component/NewTodo/NewTodo.js';
import Feature from './component/Feature/Feature';

const INITIAL_TODO=[
   {
      id:"4",
      title:'CN Practicals',
      status:false,
      deadline:new Date(2021,8,3),
   },
   {
      id:"9",
      title:'MongoDB Course',
      status:true,
      deadline:new Date(2021,0,1),
   },
   {
      id:"1",
      title:'React Course',
      status:false,
      deadline:new Date(2020,4,7),
   },
   {
      id:"6",
      title:'Node Course',
      status:true,
      deadline:new Date(2021,8,22),
   }
];

const App = () => {
   const [todos,setTodos]=useState(INITIAL_TODO);
   const [filteredYear,setFilteredYear]=useState('2021');
   const [filteredMonth,setFilteredMonth]= useState('January');

   const addNewTodo = (newTodo) => {
      setTodos(prevState=>{
         return [newTodo,...prevState];
      });
   };

   const monthHandler = (newMonth) =>{
      setFilteredMonth(newMonth);
   };

   const yearHandler = (newYear) =>{
      setFilteredYear(newYear);
   };

   const filteredTodos=todos.filter(todo=>{
      return (todo.deadline.toLocaleString('en-US',{month:'long'})===filteredMonth &&
              todo.deadline.getFullYear().toString()===filteredYear
      );
  });

  const calenderTodos=filteredTodos.map(todo=>{
      return (parseInt(todo.deadline.toLocaleString('default',{day:'numeric'})));
  });

  const deleteTodoHandler=(id)=>{
      let newtodos=todos.filter(todo=>{
        return todo.id!==id;
      });
      setTodos(newtodos);
  }

  const statusHandler=(id)=>{
      const index=todos.findIndex((todo)=>todo.id===id);
      todos[index].status=!todos[index].status;
      const newTodo=[...todos];
      setTodos(newTodo);
  }


  const stats=[filteredTodos.length,0,0];
  filteredTodos.forEach(todo=>{
      if(todo.status)
         stats[2]+=1;
      else
         stats[1]+=1; 
  })

   return (
      <div>
         <NewTodo onNewTodoEntered={addNewTodo}/>
         <Feature 
            selectedYear={filteredYear} 
            selectedMonth={filteredMonth}
            changeFilteredMonth={monthHandler}
            changeFilteredYear={yearHandler}
            Calendertodos={calenderTodos}
            stats={stats}
         />
         <Todos 
            todos={filteredTodos} 
            onDeleteTodo={deleteTodoHandler}
            onchangeStatus={statusHandler}
         />
      </div>
   );
}

export default App;

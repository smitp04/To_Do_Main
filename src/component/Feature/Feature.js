import React,{useState} from 'react';

import './Feature.css';
import TodoFilter from './TodoFilter';
import Calender from './Calender';
import Stats from './Stats';

const Feature = (props) => {
    const changeFilteredMonth = (newMonth) =>{
        props.changeFilteredMonth(newMonth);
    }
    const changeFilteredYear =(newYear) => {
        props.changeFilteredYear(newYear);
    };
    return (
        <div className="feature_container">
            <div className="left_container">
                <TodoFilter 
                    selectedYear={props.selectedYear} 
                    selectedMonth={props.selectedMonth} 
                    onChangeMonth={changeFilteredMonth} 
                    onChangeYear={changeFilteredYear}
                />
                <Calender todos={props.Calendertodos}/>
            </div>
            <div className="right_container">
                <Stats stats={props.stats}/>
            </div>
        </div>
    );
};

export default Feature;
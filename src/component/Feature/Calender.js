import React,{useState} from 'react';
import Parser from 'html-react-parser';
import './Calender.css';

const Calender = (props) => {
    let calender='';
  
    for(let i=1;i<=31;i++){
        if(props.todos.includes(i))
            calender+=`<div class="dead" key={${i}}><button class="dead_btn">${i}</button></div>`;
        else
        calender+=`<div key={${i}}><button class="btn">${i}</button></div>`;
    }
    for(let i=1;i<5;i++)
        calender+=`<div></div>`;


    return (
        <div className="calender_page" id="calender_page">
            {Parser(calender)}
        </div>
    );
};

export default Calender;
import React,{useState} from 'react';
import './TodoFilter.css';

const TodoFilter = (props) => {
    const newFilteredMonth = (event) => {
        props.onChangeMonth(event.target.value);
    };
    const newFilteredYear = (event) => {
        props.onChangeYear(event.target.value);
    };

    return (
        <div className="filter_container">
            <label className="filter_label">Filter</label>
            <div className="month_filter">
                <select className="month" value={props.selectedMonth} onChange={newFilteredMonth}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>
            <div className="year_filter">
                <select className="year" value={props.selectedYear} onChange={newFilteredYear}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    );
};

export default TodoFilter;
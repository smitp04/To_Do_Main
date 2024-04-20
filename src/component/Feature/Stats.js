import React,{useState} from 'react';
import './Stats.css';

const Stats = (props) => {
    return (
        <div className="stats_container">
            <div className="total stat_detail">
                <div className="label">Total</div>
                <div className="count">{props.stats[0]}</div>
            </div>
            <div className="pending stat_detail">
                <div className="label">Pending</div>
                <div className="count">{props.stats[1]}</div>
            </div>
            <div className="completed stat_detail">
                <div className="label">Completed</div>
                <div className="count">{props.stats[2]}</div>
            </div>
        </div>
    );
};

export default Stats;
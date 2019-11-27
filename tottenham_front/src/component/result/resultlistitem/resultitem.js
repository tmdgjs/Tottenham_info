import React from 'react';

const resultitem = (props) => {
    return (
        <div className="result_item">
            <span className="items_day">
                {props.result.day}
            </span>
            <span className="items_time">
                {props.result.date}, {props.result.time}
            </span>

            <div className="items_logo">
                <div className="items_home">
                    <img alt="logo" src={props.result.homelogo}/>
                    <span>{props.result.home}</span>    
                </div>
                
                <span className="item_rs">
                    {props.result.homescore + ' : ' + props.result.awayscore}</span>
                
                <div className="items_away">
                    <img alt="logo" src={props.result.awaylogo}/>
                    <span>{props.result.away}</span>   
                </div>
            </div>

            <span className="items_type">{props.result.leaguetype}</span>
            <span className="items_place">{props.result.matchplace}</span>
        </div>
    );
};

export default resultitem;
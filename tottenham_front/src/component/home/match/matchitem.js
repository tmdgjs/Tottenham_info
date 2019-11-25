import React from 'react';

const matchitem = (props) => {
    return (
        
            <li>
                <div className="enemy_logo">
                    <img src={props.match.enemylogo} alt="logo" />
                </div>
                <div className="match_date">
                    <span>{props.match.day}</span>&nbsp;<span>{props.match.date}</span><span> | </span> <span>{props.match.time}</span>&nbsp;<span>{props.match.mer}</span>
                </div>
                
                <div className="match_stadium">
                    <span>{props.match.matchplace}</span>
                </div>
            </li> 
        
    );
};

export default matchitem;
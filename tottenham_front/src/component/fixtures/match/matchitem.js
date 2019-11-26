import React from 'react';

const matchitem = (props) => {

    return (        
        <div className="fixtures_item">
            <span className="items_day">
                {props.fixture.day}
            </span>
            <span className="items_time">
                {props.fixture.date}, {props.fixture.time}
            </span>

            <div className="items_logo">
                <div className="items_home">
                    <img alt="logo" src={props.fixture.homelogo}/>
                    <span>{props.fixture.home}</span>    
                </div>
                
                <span className="item_rs">
                    {props.fixture.homescore === null ?  'VS' : props.fixture.homescore + ' : ' + props.fixture.awayscore }</span>
                
                <div className="items_away">
                    <img alt="logo" src={props.fixture.awaylogo}/>
                    <span>{props.fixture.away}</span>   
                </div>
            </div>

            <span className="items_type">{props.fixture.leaguetype}</span>
            <span className="items_place">{props.fixture.matchplace}</span>
        </div>
        
    );
};

export default matchitem;
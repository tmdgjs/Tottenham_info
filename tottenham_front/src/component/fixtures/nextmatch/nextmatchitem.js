import React from 'react';

const nextmatchitem = (props) => {
    
        console.log(props)
    return (
        <div id="next_match_wrap">
                <div id="next_match_txt_wrap">
                <h1 className="next_match_title">
                    next match
                </h1>

                <span className="next_match_day">{props.fixture.day}</span>

                <div className="next_match_time">

                    {props.fixture.date} &nbsp; {props.fixture.time}
                </div>

                <div className="next_match_type_and_place">
                    <span className="next_match_type">{props.fixture.leaguetype}</span>
                    <span className="next_match_place">{props.fixture.matchplace}</span>
                </div>
        </div>

        <div id="next_match_img_wrap">
                <div className="home_team">
                    <img alt="logo" src={props.fixture.homelogo}/>
                    <span>{props.fixture.home}</span>    
                </div>

                <span className="vs_logo">VS</span>
                <div className="away_team">
                    <img alt="logo" src={props.fixture.awaylogo}/>
                    <span>{props.fixture.away}</span>   
                </div>
        </div>
   </div>
    );
};

export default nextmatchitem;
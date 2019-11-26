import React from 'react';

const nextmatchitem = (props) => {

    return (
        <div id="next_match_wrap">
                <div id="next_match_txt_wrap">
                <h1 className="next_match_title">
                    next match
                </h1>

                <span className="next_match_day">{props.nextmatch.day}</span>

                <div className="next_match_time">

                    {props.nextmatch.date} &nbsp; {props.nextmatch.time}
                </div>

                <div className="next_match_type_and_place">
                    <span className="next_match_type">{props.nextmatch.leaguetype}</span>
                    <span className="next_match_place">{props.nextmatch.matchplace}</span>
                </div>
        </div>

        <div id="next_match_img_wrap">
                <div className="home_team">
                    <img alt="logo" src={props.nextmatch.homelogo}/>
                    <span>{props.nextmatch.home}</span>    
                </div>

                <span className="vs_logo">VS</span>
                <div className="away_team">
                    <img alt="logo" src={props.nextmatch.awaylogo}/>
                    <span>{props.nextmatch.away}</span>   
                </div>
        </div>
   </div>
    );
};

export default nextmatchitem;
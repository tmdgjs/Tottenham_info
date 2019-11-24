import React from 'react';

const playeritem = (props) => {
    return (
       
        <div className="player_wrap">
            <img src={props.player.playerimg} alt="player"/>
            <div className="player_underline"></div>
            <div className="player_info">
                <div className="player_info_left">
                    <div className="player_name">{props.player.playername}</div>
                    <div className="player_country">{props.player.playercountry}</div>
                </div>

                <div className="player_info_right">
                    <div className="player_number">{props.player.playernum}</div>
                </div>
                
            </div>
        </div>

    );
};

export default playeritem;
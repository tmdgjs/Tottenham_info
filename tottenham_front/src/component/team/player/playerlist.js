import React from 'react';

import PlayerItem from './playeritem';
const playerlist = (props) => {
    return (
        <div id="team_first_wrap">
                    <div className="title">
                        <h2>{props.list_title}</h2>
                    </div>
                    <div className="all_player_wrap">
                        {props.player && props.player.map(item => <PlayerItem key={item.id} player={item}/>)}
                    </div>
               
        </div>
    );
};

export default playerlist;
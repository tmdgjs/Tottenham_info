import React from 'react';

import PlayerItem from './playeritem';
const playerlist = (props) => {
    return (
        <div id="team_first_wrap">
                    <div className="title">
                        <h2>Team</h2>
                    </div>
                    <div className="all_player_wrap">
                    {props.player.data && props.player.data.map(item => <PlayerItem key={item.id} player={item}/>)}
                    </div>
               
        </div>
    );
};

export default playerlist;
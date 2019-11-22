import React from 'react';

const playerlist = () => {
    return (
        <div id="team_first_wrap">
                    <div className="title">
                        <h2>Team</h2>
                    </div>

                    <div className="all_player_wrap">
                        <div className="player_wrap">
                            <img src="https://tot-tmp.azureedge.net/media/20210/firstteam_heungminson.png?anchor=center&mode=crop&width=750" alt="player"/>
                            <div className="player_underline"></div>
                            <div className="player_info">
                                <div className="player_info_left">
                                    <div className="player_name">Heung-Min-Son</div>
                                    <div className="player_country">South Korea</div>
                                </div>

                                <div className="player_info_right">
                                    <div className="player_number">7</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default playerlist;
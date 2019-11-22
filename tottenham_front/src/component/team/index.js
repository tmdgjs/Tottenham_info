import React, { Component } from 'react';
import PlayerList from './player/playerlist'
import './team.scss';
import {Link} from 'react-router-dom'
class index extends Component {
    render() {
        return (
            <div id="team_wrap">
                
                <div id="main_team_wrap">
                    <h1>First Team</h1>
                    
                </div>

                <ul id="team_type">
                    <Link to="/team"><li>Players</li></Link>
                    <Link to="/team/staff"><li>Coaching Staff</li></Link>
                </ul>
                
                <PlayerList />

                <div id="team_second_wrap">
                    <div className="title">
                        <h2>On loan</h2>
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
            </div>
        );
    }
}

export default index;
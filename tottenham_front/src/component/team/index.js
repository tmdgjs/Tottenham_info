import React, { Component } from 'react';
import PlayerList from './player/playerlist'
import './team.scss';
import {Link} from 'react-router-dom'
import axios from 'axios';
class index extends Component {
    
    state = {
        team : []
    }

    componentWillMount(){

        
        axios.get(`http://localhost:8080/player/add`)
            .then( response => { 
                this.setState({team: response})
            })
            .catch( e => { 
            this.setState({team: []}) 
            }
        );
    }

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
                
                <PlayerList player={this.state.team}/>

               
            </div>
        );
    }
}

export default index;
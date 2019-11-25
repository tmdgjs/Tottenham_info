import React, { Component } from 'react';
import PlayerList from './player/playerlist'
import './team.scss';
import {Link} from 'react-router-dom'
import axios from 'axios';
class index extends Component {
    
    state = {
        team : [],
        loan : []
    }

    componentDidMount(){


        axios.all([
            axios.get(`http://localhost:8080/player/add/${1}`),
            axios.get(`http://localhost:8080/player/add/${2}`)
        ])
        .then(axios.spread((team, loan)=>{
        
            this.setState({
                team: team.data, 
                loan : loan.data
            })
        }))
        .catch( e=> {
            this.setState({
                team: [], 
                loan : []
            })
        })
    }

    render() {
       
        return (
            <div id="team_wrap">
                
                <div id="main_team_wrap">
                    <h1>First Team</h1>
                    
                </div>

                <ul id="team_type">
                    <Link to="/team"><li>Players</li></Link>
                    <Link to="/staff"><li>Coaching Staff</li></Link>
                </ul>
                
                <PlayerList player={this.state.team} list_title={"Team"}/>

                <PlayerList player={this.state.loan} list_title={"On loan"}/>

            </div>
        );
    }
}

export default index;
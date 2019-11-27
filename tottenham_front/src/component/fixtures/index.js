import React, { Component } from 'react';

import moment from 'moment';
import axios from 'axios'
import './fixtures.scss'

import Matchlist from './match/matchlist'
import Nextmatchlist from './nextmatch/nextmatchlist';

class index extends Component {

    state = {
        nextmatch : [],
        fixture: [],
        today : moment(new Date()).format('YYYYMMDD')
    }
    componentDidMount(){

 
        axios.all([
            axios.get(`http://localhost:8080/fixture/nextmatch/${this.state.today}`),
            axios.get(`http://localhost:8080/fixture/load/${this.state.today}`)
        ])
        .then(axios.spread((nextmatch, fixture)=>{
            console.log(nextmatch.data)
            this.setState({
                nextmatch: nextmatch.data, 
                fixture : fixture.data
                
            })
        }))
        .catch( e=> {
            this.setState({
                nextmatch: [], 
                fixture : []
                
            })
        })
    }

    render() {
        
        return (
            <div id="fixtures_wrap"> 
               <Nextmatchlist nextmatch={this.state.nextmatch}/>
                <Matchlist list_title={"Fixtures"} fixture={this.state.fixture}/>
         
            </div>
        );
    }
}

export default index;
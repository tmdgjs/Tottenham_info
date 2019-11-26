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
        result : [],

        
        today : moment(new Date()).format('YYYYMMDD')
    }
    componentDidMount(){

        axios.get(`http://localhost:8080/fixture/nextmatch/${this.state.today}`)
            .then( response => { 
                this.setState({fixtures: response})
            })
            .catch( e => { 
            this.setState({fixtures: []}) 
            }
        );

        axios.all([
            axios.get(`http://localhost:8080/fixture/nextmatch/${this.state.today}`),
            axios.get(`http://localhost:8080/fixture/result/${this.state.today}`),
            axios.get(`http://localhost:8080/fixture/load/${this.state.today}`)
        ])
        .then(axios.spread((nextmatch, result, fixture)=>{
            this.setState({
                nextmatch: nextmatch.data, 
                result : result.data,
                fixture : fixture.data
                
            })
        }))
        .catch( e=> {
            this.setState({
                nextmatch: [], 
                result : [],
                fixture : []
                
            })
        })
    }

    render() {
        console.log(this.state.result,this.state.fixture)
        return (
            <div id="fixtures_wrap"> 
               <Nextmatchlist nextmatch={this.state.nextmatch}/>
                <Matchlist list_title={"Fixtures"} fixture={this.state.fixture}/>
                <Matchlist list_title={"Result"} fixture={this.state.result}/>
            </div>
        );
    }
}

export default index;
import React, { Component } from 'react';
import Resultlist from './resultlistitem/resultlist'

import moment from 'moment'
import axios from 'axios'

import './result.scss'
class index extends Component {

    state = {
        result : [],

        
        today : moment(new Date()).format('YYYYMMDD')
    }
    
    componentDidMount(){
        axios.get(`http://localhost:8080/fixture/result/${this.state.today}`)
        .then( response => { 
            this.setState({result: response.data})
        })
        .catch( e => { 
        this.setState({result: []}) 
        }
    );

    }
    render() {
     
        return (
            <Resultlist list_title={"Result"} result={this.state.result}/>
        );
    }
}

export default index;
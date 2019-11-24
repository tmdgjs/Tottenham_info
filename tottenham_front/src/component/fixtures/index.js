import React, { Component } from 'react';

import moment from 'moment';
import axios from 'axios'
import './fixtures.scss'

import Nextmatchlist from './nextmatch/nextmatchlist';

class index extends Component {

    state = {
        fixtures : [],
        
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
    }

    render() {
        console.log(this.state.fixtures)
        return (
            <div id="fixtures_wrap"> 
               <Nextmatchlist fixtures={this.state.fixtures}/>
                <div id="fixtures_wrap">
                    <div className="title">
                        <h2>Fixtures</h2>
                    </div>

                    <div className="fixtures">
                        <div className="fixtures_item">
                            <span className="items_day">
                                Saturday
                            </span>
                            <span className="items_time">
                                23 November 21:30
                            </span>

                            <div className="items_logo">
                                <div className="items_home">
                                    <img alt="logo" src="https://tot-tmp.azureedge.net/media/2287/west-ham-united-300x300.png?anchor=center&mode=crop&width=300"/>
                                    <span>웨햄</span>    
                                </div>

                                <span className="items_vs_logo">VS</span>
                                
                                <div className="items_away">
                                    <img alt="logo" src="https://tot-tmp.azureedge.net/media/2287/west-ham-united-300x300.png?anchor=center&mode=crop&width=300"/>
                                    <span>웨햄</span>   
                                </div>
                            </div>

                            <span className="items_type">Premier League</span>
                            <span className="items_place">London Stadium, London</span>
                        </div>
                        
                    </div>
                </div>

                <div id="fixtures_result_wrap">
                    <div className="title">
                        <h2>Result</h2>
                    </div>

                    <div className="fixtures">
                        <div className="fixtures_item">
                            <span className="items_day">
                                Saturday
                            </span>
                            <span className="items_time">
                                23 November 21:30
                            </span>

                            <div className="items_logo">
                                <div className="items_home">
                                    <img alt="logo" src="https://tot-tmp.azureedge.net/media/2287/west-ham-united-300x300.png?anchor=center&mode=crop&width=300"/>
                                    <span>웨햄</span>    
                                </div>

                                <span className="items_vs_logo">VS</span>
                                
                                <div className="items_away">
                                    <img alt="logo" src="https://tot-tmp.azureedge.net/media/2287/west-ham-united-300x300.png?anchor=center&mode=crop&width=300"/>
                                    <span>웨햄</span>   
                                </div>
                            </div>

                            <span className="items_type">Premier League</span>
                            <span className="items_place">London Stadium, London</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;
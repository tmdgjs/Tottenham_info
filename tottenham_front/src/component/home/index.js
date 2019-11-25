import React, { Component } from 'react';

import './home.scss'
import Logo from '../../resource/tottenham_logo.png'
import axios from 'axios'
import moment from 'moment';
import MatchList from './match/matchlist'

class index extends Component {

    state={
        plstat : [],
        clstat : [],
        today : moment(new Date()).format('YYYYMMDD'),
        matchls : []
    }

    componentDidMount(){

        axios.all([
            axios.get(`http://localhost:8080/fixture/sixmatch/${this.state.today}`),
            axios.get(`http://localhost:8080/leaguetable/${1}`),
            axios.get(`http://localhost:8080/leaguetable/${2}`)
        ])
        .then(axios.spread((matchls, plstat,clstat)=>{
            this.setState({
                matchls: matchls.data, 
                plstat : plstat.data,
                clstat : clstat.data
            })
        }))
        .catch( e=> {
            this.setState({
                matchls: [], 
                plstat : [],
                clstat : []
            })
        })

    }

    render() {
       console.log(this.state.matchls);
        return (
            <div id="home_wrap">
                <div id="match_date_title_wrap">
                    <h1>Match Day</h1>
                </div>
                
                <div id="match_date_wrap">
                   <MatchList match={this.state.matchls}/>
                </div>

                <div className="state_wrap">
                    <div className="state_title_wrap">
                        <h2>Premier league</h2>
                    </div>

                    <div className="state_table_wrap">
                        <table className="table_info">
                            <thead>
                                <tr>
                                    <th>Pos</th>
                                    <th>Team</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>F</th>
                                    <th>A</th>
                                    <th>GD</th>
                                    <th>Pts</th>
                                </tr>
                                
                            </thead>
                            
                            <tbody> 
                                <tr>
                                    <td>{this.state.plstat[0]}</td>
                                    <td><img src={Logo} alt="logo"/></td>
                                    <td>{this.state.plstat[1]}</td>
                                    <td>{this.state.plstat[2]}</td>
                                    <td>{this.state.plstat[3]}</td>
                                    <td>{this.state.plstat[4]}</td>
                                    <td>{this.state.plstat[5]}</td>
                                    <td>{this.state.plstat[6]}</td>
                                    <td>{this.state.plstat[7]}</td>
                                    <td>{this.state.plstat[8]}</td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>

                <div className="state_wrap">
                    <div className="state_title_wrap">
                        <h2>UEFA Champions League</h2>
                    </div>

                    <div className="state_table_wrap">
                        <table className="table_info">
                            <thead>
                                <tr>
                                    <th>Pos</th>
                                    <th>Team</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>F</th>
                                    <th>A</th>
                                    <th>GD</th>
                                    <th>Pts</th>
                                </tr>
                                
                            </thead>
                            
                            <tbody> 
                                <tr>
                                    <td>{this.state.clstat[0]}</td>
                                    <td><img src={Logo} alt="logo"/></td>
                                    <td>{this.state.clstat[1]}</td>
                                    <td>{this.state.clstat[2]}</td>
                                    <td>{this.state.clstat[3]}</td>
                                    <td>{this.state.clstat[4]}</td>
                                    <td>{this.state.clstat[5]}</td>
                                    <td>{this.state.clstat[6]}</td>
                                    <td>{this.state.clstat[7]}</td>
                                    <td>{this.state.clstat[8]}</td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default index;
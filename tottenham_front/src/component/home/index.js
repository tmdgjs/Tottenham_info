import React, { Component } from 'react';

import './home.scss'

class index extends Component {
    render() {
        return (
            <div id="home_wrap">
                <div id="match_date_title_wrap">
                    <h1>Match Day</h1>
                </div>
                
                <div id="match_date_wrap">
                    <ul>
                        <li>
                            <div className="enemy_logo">
                                <img src="https://tot-tmp.azureedge.net/media/2269/everton-300x300.png?anchor=center&mode=crop&width=300" alt="logo" />
                            </div>
                            <div className="match_date">
                                <span>sun 3 NOV</span><span> | </span> <span>4 : 30</span> <span>PM</span>
                            </div>
                            
                            <div className="match_stadium">
                                <span>GOODDISON PARK</span>
                            </div>
                        </li> 
                        
                    </ul>
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
                                    <td>14</td>
                                    <td><img src="https://tot-tmp.azureedge.net/media/2269/everton-300x300.png?anchor=center&mode=crop&width=300" alt="logo"/></td>
                                    <td>12</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td>4</td>
                                    <td>18</td>
                                    <td>17</td>
                                    <td>1</td>
                                    <td>14</td>
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
                                    <td>2</td>
                                    <td><img src="https://tot-tmp.azureedge.net/media/2269/everton-300x300.png?anchor=center&mode=crop&width=300" alt="logo"/></td>
                                    <td>4</td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>13</td>
                                    <td>9</td>
                                    <td>4</td>
                                    <td>7</td>
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
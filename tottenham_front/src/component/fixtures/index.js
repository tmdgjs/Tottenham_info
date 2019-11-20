import React, { Component } from 'react';

import './fixtures.scss'
class index extends Component {
    render() {
        return (
            <div id="fixtures_wrap"> 
                <div id="main_fixtures_wrap">
                   <div id="next_match_txt_wrap">
                        <h1 className="next_match_title">
                            next match
                        </h1>

                        <span className="next_match_day">Saturday</span>

                        <div className="next_match_time">
                            23 November 21:30
                        </div>

                        <div className="next_match_type_and_place">
                            <span className="next_match_type">Premier League</span>
                            <span className="next_match_place">London Stadium, London</span>
                        </div>
                   </div>

                   <div id="next_match_img_wrap">
                        <div className="home_team">
                            <img alt="logo" src="https://tot-tmp.azureedge.net/media/2287/west-ham-united-300x300.png?anchor=center&mode=crop&width=300"/>
                            <span>웨햄</span>    
                        </div>

                        <span className="vs_logo">VS</span>
                        <div className="away_team">
                            <img alt="logo" src="https://tot-tmp.azureedge.net/media/2287/west-ham-united-300x300.png?anchor=center&mode=crop&width=300"/>
                            <span>웨햄</span>   
                        </div>
                   </div>
                </div>
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
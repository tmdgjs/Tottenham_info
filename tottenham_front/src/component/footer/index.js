import React, { Component } from 'react';
import './footer.scss'
import Nike from '../../resource/nike_mark.png'
import Aia from '../../resource/aia_mark.png'

class index extends Component {
    render() {
        return (
            <footer id="footer_wrap">
                
                <div id="sponsors_wrap">
                    <div id="sponsor_features">
                        <img src={Aia} alt="aia"/>
                        <img src={Nike} alt="nike"/>
                    </div>

                    
                </div>

                <div id="sns_wrap">
                    <ul>
                       
                        
                    </ul>
                </div>

                <div id="footer_wrap">
                    <span>SPURS</span>
                </div>
            </footer>
        );
    }
}

export default index;
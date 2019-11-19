import React, { Component } from 'react';
import './footer.scss'
import Nike from '../../resource/nike_mark.png'
import Aia from '../../resource/aia_mark.png'
import Facebook from '../../resource/facebook.png'
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
                        <li>
                            <img src={Facebook} alt="facebook"/>
                        </li>

                        <li>
                            <img src={Facebook} alt="facebook"/>
                        </li>
                        <li>
                            <img src={Facebook} alt="facebook"/>
                        </li>

                        <li>
                            <img src={Facebook} alt="facebook"/>
                        </li>
                        <li>
                            <img src={Facebook} alt="facebook"/>
                        </li>

                        <li>
                            <img src={Facebook} alt="facebook"/>
                        </li>
                        
                    </ul>
                </div>

                <div id="site_wrap">
                    <ul>
                        <li>
                            SPURS
                        </li>
                        <li>
                            SHOP
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default index;
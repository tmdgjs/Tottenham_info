import React, { Component } from 'react';
import Logo from '../../resource/logo.svg'
import './header.scss'
import {Link} from 'react-router-dom'

class index extends Component {
    render() {
        return (
            <div id="header_wrap">
                
                <ul>
                    <Link to="/fixtures"><li>Fixtures</li></Link>
                    <Link to="/"><img className="title_logo" src={Logo} alt="logo" /></Link>
                    <Link to="/team"><li>Team</li></Link>
                    
                </ul>
            </div>
        );
    }
}
export default index;
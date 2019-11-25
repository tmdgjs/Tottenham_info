import React, { Component } from 'react';

import Home from '../home'
import Fixtures from '../fixtures'
import './main.scss'
import {Route} from 'react-router-dom';
import Team from '../team'
class index extends Component {
    render() {
        return (
            <div id="main_wrap">
                <div id="content_wrap">
                    <Route  path='/' exact component={Home} />
                    <Route path='/fixtures'component={Fixtures} />
                    <Route path='/team' component={Team} />
                </div>
            </div>
        );
    }
}

export default index;
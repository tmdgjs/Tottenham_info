import React from 'react';

import Matchitem from './matchitem'

const matchlist = (props) => {
    return (
        <div id="fixtures_wrap">
                    <div className="title">
                        <h2>{props.list_title}</h2>
                    </div>
                    <div className="fixtures">
                    {props.fixture && props.fixture.map(item => <Matchitem key={item.id} fixture={item}/>)}
                    </div>
        </div>
    );
};

export default matchlist;
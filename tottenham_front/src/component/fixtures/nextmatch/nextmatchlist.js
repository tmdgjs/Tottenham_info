import React from 'react';

import Nextmatchitem from './nextmatchitem'

const nextmatchlist = (props) => {
    return (
        <div id="main_fixtures_wrap">
            
            {props.fixtures.data && <Nextmatchitem fixture={props.fixtures.data}/>}
                   
        </div>
    );
};

export default nextmatchlist;
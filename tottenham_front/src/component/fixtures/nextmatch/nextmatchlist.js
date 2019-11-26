import React from 'react';

import Nextmatchitem from './nextmatchitem'

const nextmatchlist = (props) => {
    return (
        <div id="main_fixtures_wrap">
            
            {props.nextmatch && <Nextmatchitem nextmatch={props.nextmatch}/>}
                   
        </div>
    );
};

export default nextmatchlist;
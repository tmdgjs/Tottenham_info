import React from 'react';
import Matchitem from './matchitem'

const matchlist = (props) => {
    return (
        <ul>
            
            {props.match && props.match.map(item => <Matchitem key={item.id} match={item}/>)}
            
        </ul>
    );
};

export default matchlist;
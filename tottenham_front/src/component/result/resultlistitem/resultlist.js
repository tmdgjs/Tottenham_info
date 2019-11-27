import React from 'react';

import Resultitem from './resultitem'
const resultlist = (props) => {
    return (
        <div id="result_wrap">
            <div className="result_title">
                <h2>{props.list_title}</h2>
            </div>
            <div className="result">
            {props.result && props.result.map(item => <Resultitem key={item.id} result={item}/>)}
            </div>
        </div>
    );
};

export default resultlist;

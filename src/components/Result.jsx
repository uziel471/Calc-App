import React from 'react';

const Result=(props)=>{
    console.log(props);
    return(
        <div className="result">
            <span>{props.value}</span>
        </div>
    )
}

export default Result;
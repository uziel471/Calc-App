import React from 'react';
import PorpTypes from 'prop-types';

const Result=({value })=>(
    <div className="result">
        <span>{value}</span>
    </div>
)

Result.propTypes ={
    value:PorpTypes.string.isRequired
}
Result.defaultProps={
    value:"0"
}
export default Result;
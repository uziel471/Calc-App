import React from 'react';
import Button from './Button/index';
import PropType from 'prop-types';

const numbers=[7,8,9,4,5,6,1,2,3,0];
const renderButtons=(onClickNumber)=>{
    //var number 0
    //iterar desde el boton 1 al 0
    //<Button text={number.toString} clickHandler={onClickNumber}/>
    const renderButton= item=>(
        <Button 
            key={item} 
            text={item.toString()} 
            clickHandler={onClickNumber}
        />
    )
    return numbers.map(renderButton)
}
const Numbers=({ onClickNumber })=>{
    return(
        <section className="numbers">
            {renderButtons(onClickNumber)}
        </section>
    )
}
Numbers.prototype={
    clickHandlerFunction:PropType.func.isRequired
}
export default Numbers;
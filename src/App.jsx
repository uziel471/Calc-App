import React,{useState} from 'react';
import { words } from 'lodash';
import Numbers from './components/Numbers';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import './App.css';
import Result from './components/Result';
const App =()=>{
    const [stack,setStack]=useState("")
    const items=words(stack , /[^-^+^*^/]+/g)
    const value=items.length>0 ? items[items.length - 1] : "0"
    return(
        <main className='react-calculator'>
            <Result value = {value} />
            <Numbers onClickNumber={number =>setStack(`${stack}${number}`)}/>
            <Functions  onContentClear={( )=>setStack('')}
                        onDelete={()=>{
                        if(stack.length>0){
                            const newStack=stack.substring(0,stack.length-1)
                            setStack(newStack)
                        }
                    }
                }
            />
            <MathOperations onClickOperation={operation=>{setStack(`${stack}${operation}`)}}
                            onClickEqual={equal=>{setStack(eval(stack).toString())}} />
        </main> 
    )
}
//Exportacion
export default App;
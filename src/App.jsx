//Importacion
/*eslint no-eval:0*/
import React,{useState} from 'react';
import Numbers from './components/Numbers';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import './App.css';
import Result from './components/Result';
//Funcion Flecha o Arrow Function
const App =()=>{
    //arrayYextoFuncionMedificaTexto=>["hola",funcion]
    //1er posicion: valor que esta por defecto inicialmente
    //2da posicion: funcion que me permite modificar el valor por defecto
    //[xxxxx],[setxxxxx]

    const [stack,setStack]=useState("")

    //lo que ejecuta la funcion
    return(
        <main className='react-calculator'>
            <Result 
            value = {stack} />
            <Numbers onClickNumber={number =>{
                    setStack(`${stack}${number}`)
                    }
                }
            />
            <Functions 
                onContentClear={( )=>{
                        setStack('')
                    }
                }
                onDelete={()=>{
                        if(stack.length>0){
                            const newStack=stack.substring(0,stack.length-1)
                            setStack(newStack)
                        }
                    }
                }
            />
            <MathOperations 
                onClickOperation={operation=>{
                        setStack(`${stack}${operation}`)
                    }
                }
                onClickEqual={equal=>{
                     setStack(eval(stack).toString())
                    }
                }
            />
        </main> 
    )
}
//Exportacion
export default App;
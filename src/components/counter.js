import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";
import IncreaseButton from "./IncreaseButton"
import DecreaseButton from './DecreaseButton';


function Counter() {
    const [counter, setCounter] = useState(0)

    const increase = ()=>{
      setCounter(counter +1)
    };

    const decrease = ()=>{
      if(counter != 0){
        setCounter(counter -1 )
      }
    };
    return(

    <div className="text-center mt-5">
    <h1>{counter}</h1>

    <IncreaseButton increaseButton={increase}></IncreaseButton>
    <DecreaseButton decreaseButton={decrease}></DecreaseButton>
    
    
    </div>
    );

}
export default Counter;

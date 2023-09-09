import './App.css';
import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/','*','+','-','.'];


  // Function for Update and validate the operands and operators
  const updateCalc = value => {

    // to validate the input Operators while passing multiple operators
    if( ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
      return ;
    }
    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
        digits.push(
          <button 
                key={i} 
                onClick={ () => updateCalc(i.toString()) } >
                  {i}
          </button>
        )
    }
    return digits;
  }

  // Function for print the final output in display
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if(calc == ''){
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  }


  return (
    <div className="App">
      <div className='calculator' >
        <div className='display' >
          {/* Printing the ongoing result */}
          {result ? <span>({result})</span> : "" }
          {/* Operands and operators view */} &nbsp;
          { calc || "0" }
        </div>

        <div className='operators' >
          {/* Opertors Buttons */}
          <button onClick={ () => updateCalc('/') } >/</button>
          <button onClick={ () => updateCalc('*') } >*</button>
          <button onClick={ () => updateCalc('-') } >-</button>
          <button onClick={ () => updateCalc('+') } >+</button>

          <button onClick={ deleteLast } >DEL</button>

          <div className='digits' >
            {/* Preview numbers buttons function */}
            {createDigits()}
            <button onClick={ () => updateCalc('0') } >0</button>
            <button onClick={ () => updateCalc('.') } >.</button>
            <button onClick={ calculate } >=</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

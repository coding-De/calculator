import React, { useRef, useState } from 'react'
import CalculatorDisplay from './components/CalculatorDisplay'
import CalculatorButton from './components/CalculatorButton'

 

export default function Calculator() {
  const [displayVar,setDisplayVar]=useState("");
  let isDobleOperation =useRef(false);
  let operation = useRef("");
  return (
    <div className='Calculator'>
        <div className='calculatorchildDisplay'>
      <CalculatorDisplay displayVar={displayVar}/>
      </div>
      <div className='calculatorchildButton'>
      <CalculatorButton setDisplayVar={setDisplayVar} displayVar={displayVar} isDobleOperation={isDobleOperation} operation={operation} />
      </div>
    </div>
  )
}

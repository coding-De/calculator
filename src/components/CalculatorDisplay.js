import React from 'react'

export default function CalculatorDisplay(prop) {
  
if(prop.displayVar.length%12===0){
  let display = document.getElementsByClassName("display");
  if(display[0])
  display[0].setAttribute("font-size","27px")
}
  return (
    <div>
       <div className='display' style={{fontSize:"55px"}}>{prop.displayVar}</div>
    </div>
  )
}


import React from 'react';
import { evaluate } from 'mathjs';

export default function CalculatorButton(prop) {
    let result = 0;
    let firstValue = 0;
    let secondValue = 0;

    const buttonHandeler = (e) => {
        if (e.target.innerText === "C") {
            prop.setDisplayVar("");
            prop.isDobleOperation.current = false;

        }
        else if (e.target.innerText === "+/-") {
            if (prop.displayVar !== "") {

                for (let i = 1; i < prop.displayVar.length; i++) {
                    if (prop.displayVar[i] === "X" || prop.displayVar[i] === "+" || prop.displayVar[i] === "-" || prop.displayVar[i] === "÷") {
                        secondValue = prop.displayVar.slice(i + 1, prop.displayVar.length);
                        firstValue = prop.displayVar.slice(0, i);
                        prop.operation.current = prop.displayVar.slice(i, i + 1);
                        console.log(firstValue, secondValue, prop.operation.current)
                    }
                }

                if (firstValue !== 0 && secondValue !== 0) {
                    if (prop.isDobleOperation.current) {
                        console.log(prop.displayVar, secondValue, firstValue)
                        prop.setDisplayVar(firstValue + secondValue);
                        prop.isDobleOperation.current = false;
                    } else {
                        prop.setDisplayVar(firstValue + prop.operation.current + "-" + secondValue);
                        prop.isDobleOperation.current = true;
                    }
                } else {
                    if (prop.displayVar.slice(0, 1) === "-") {
                        prop.setDisplayVar(prop.displayVar.slice(1, prop.displayVar.length));
                    } else {
                        prop.setDisplayVar("-" + prop.displayVar);
                    }
                }
            }
        }
        else {
            let onelessDisplayVar = prop.displayVar[prop.displayVar.length - 1];
            if (onelessDisplayVar === e.target.innerText && (e.target.innerText === "%" || e.target.innerText === "." || e.target.innerText === "X" || e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "÷")) {
                prop.setDisplayVar(prop.displayVar);
            } else {
                if (
                    (onelessDisplayVar === "%" || onelessDisplayVar === "." || onelessDisplayVar === "X" || onelessDisplayVar === "+" || onelessDisplayVar === "-" || onelessDisplayVar === "÷")
                    &&
                    (e.target.innerText === "%" || e.target.innerText === "." || e.target.innerText === "X" || e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "÷")) {
                    prop.setDisplayVar(prop.displayVar.slice(0, prop.displayVar.length - 1) + e.target.innerText);

                } else {
                    prop.setDisplayVar(prop.displayVar + e.target.innerText);
                }
            }
        }
    }

    function buttonEqualHandeler() {
        let checkMulSign = prop.displayVar;

        for (let i = 0; i < checkMulSign.length; i++) {
            if (checkMulSign[i] === "X") {
                checkMulSign = checkMulSign.slice(0, i) + "*" + checkMulSign.slice(i + 1, checkMulSign.length);
            }
            if (checkMulSign[i] === "÷") {
                checkMulSign = checkMulSign.slice(0, i) + "/" + checkMulSign.slice(i + 1, checkMulSign.length);
            }
        }
        try {
            result = evaluate(checkMulSign);
            prop.setDisplayVar(result.toString());
        } catch (error) {
            prop.setDisplayVar("");
        }

    }

    return (
        <div className='mainButtonCointainer'>
            <div className='rowButtonCointainer'>
                <button onClick={buttonHandeler}>C</button>
                <button onClick={buttonHandeler}>+/-</button>
                <button onClick={buttonHandeler}>%</button>
                <button style={{ backgroundColor: "orange" }} onClick={buttonHandeler}>÷</button>
            </div>
            <div className='rowButtonCointainer'>
                <button onClick={buttonHandeler}>7</button>
                <button onClick={buttonHandeler}>8</button>
                <button onClick={buttonHandeler}>9</button>
                <button style={{ backgroundColor: "orange" }} onClick={buttonHandeler}>X</button>
            </div>
            <div className='rowButtonCointainer'>
                <button onClick={buttonHandeler}>4</button>
                <button onClick={buttonHandeler}>5</button>
                <button onClick={buttonHandeler}>6</button>
                <button style={{ backgroundColor: "orange" }} onClick={buttonHandeler}>-</button>
            </div>
            <div className='rowButtonCointainer'>
                <button onClick={buttonHandeler}>1</button>
                <button onClick={buttonHandeler}>2</button>
                <button onClick={buttonHandeler}>3</button>
                <button style={{ backgroundColor: "orange" }} onClick={buttonHandeler}>+</button>
            </div>
            <div className='rowButtonCointainerLast'>
                <button style={{ flex: "50%" }} onClick={buttonHandeler}>0</button>
                <button style={{ flex: "25%" }} onClick={buttonHandeler}>.</button>
                <button style={{ flex: "25%", backgroundColor: "orange" }} onClick={buttonEqualHandeler}>=</button>
            </div>
        </div>
    )
}

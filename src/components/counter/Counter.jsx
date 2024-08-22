import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    // Handler
    const incrementCounter = () => setCounter(counter + 1)
    const decrementCounter = () => setCounter(counter - 1)
    const resetCounter = () => setCounter(0)
  return (
    <div className="bg-secondary text-center w-50   mx-auto rounded-3">
<h2 className="text-info py-2">{counter}</h2>
<div className="d-flex justify-content-center mb-4 py-3">
<button className="btn btn-info mx-3 fw-bold " onClick={incrementCounter}>+</button>
<button className={`btn btn-info mx-3 fw-bold ${counter === 0 && 'disabled'}`} onClick={decrementCounter}>-</button>
</div>
<button className={`btn btn-light mb-3 ${counter === 0 && 'disabled'}`} onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default Counter
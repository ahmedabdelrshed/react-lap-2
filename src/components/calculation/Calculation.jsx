import { useEffect, useState } from "react"

const Calculation = () => {
  const [counter, setCounter] = useState(0)
  const [calculation, setCalculation] = useState(0)

  useEffect(() => {
    setCalculation(counter * 2)
  }, [counter])
  // Handler
  const incrementCounter = () => setCounter(counter + 1)
  return (
    <div className="bg-secondary text-center   w-50   mx-auto rounded-3">
      <h2 className="text-info py-2">{counter}</h2>

      <button className="btn btn-info mx-3 fw-bold mb-2" onClick={incrementCounter}>+</button>
      <p className="text-white " style={{ fontSize: '20px' }}>Calculation : {calculation} </p>
    </div>
  )
}

export default Calculation
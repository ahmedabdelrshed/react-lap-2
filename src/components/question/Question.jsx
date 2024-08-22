/* eslint-disable react/prop-types */
import { useState } from "react"

const Question = ({question,answer}) => {
    const [show,setShow] = useState(false)
    const toggleShow = () => setShow(!show)
  return (
    <div className="bg-light p-3 border-bottom mb-1 rounded-3 ">
    <div className="d-flex justify-content-between align-items-center">
        <h5>{question}</h5>
        <button className="btn btn-secondary text-white border-black mx-3 fw-bold" onClick={toggleShow}>{show ? '-' : '+'}</button>
    </div>
    {
        show && <p className="mt-2 ">{answer}</p>
    }
</div>
  )
}

export default Question
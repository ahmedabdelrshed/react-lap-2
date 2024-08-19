/* eslint-disable react/prop-types */
import Question from "../question/question"

const Questions = ({questionsList}) => {
   
  return (
    <div className="bg-primary w-50 mx-auto rounded-4 my-3 py-3 px-4">
<h2 className="text-center text-white mb-4 fw-bold">Frequently Asked Questions</h2>

{questionsList.map(({id,question,answer})=><Question key={id} question={question} answer={answer}/>)}
    </div>
  )
}

export default Questions
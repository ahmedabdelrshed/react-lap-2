import Question from "../question/question";

const Questions = () => {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      id: 2,
      question: "Who was the first woman to win a Nobel Prize?",
      answer: "Marie Curie",
    },
    {
      id: 3,
      question: "What is the name of the planet closest to the Sun?",
      answer: "Mercury",
    },
    {
      id: 4,
      question: "What is the largest island in the world?",
      answer: "Greenland",
    },
  ];
  return (
    <div className="bg-primary w-50 mx-auto rounded-4 my-3 py-3 px-4">
      <h2 className="text-center text-white mb-4 fw-bold">
        Frequently Asked Questions
      </h2>

      {questions.map(({ id, question, answer }) => (
        <Question key={id} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Questions;

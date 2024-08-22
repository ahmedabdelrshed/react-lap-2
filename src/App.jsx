
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/products/ProductList'
function App() {
  // const questions = [{
  //   id: 1,
  //   question: 'What is the capital of France?',
  //   answer: 'Paris'
  // },
  // {
  //   id: 2,
  //   question: 'Who was the first woman to win a Nobel Prize?',
  //   answer: 'Marie Curie'
  // },
  // {
  //   id: 3,
  //   question: 'What is the name of the planet closest to the Sun?',
  //   answer: 'Mercury'
  // },
  // {
  //   id: 4,
  //   question: 'What is the largest island in the world?',
  //   answer: 'Greenland'
  // }]
  return (
    <>
     {/* <Counter/>
     <Questions questionsList={questions}/>
     <Calculation/> */}

     {/* Lap 3 */}
<Navbar/>
<ProductList/>
    </>
  )
}

export default App

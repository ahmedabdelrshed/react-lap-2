import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../components/Pages/HomePage";
import ProductList from "../components/products/ProductList";
import HelpPage from "../components/Pages/HelpPage";
import Contact from "../components/Contact";
import Questions from "../components/questionsList/QuestionsList";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} errorElement={"Errors"}>
        <Route index element={<ProductList />} />
        <Route path="product/:id" element={""} />
        <Route path="/help" element={<HelpPage />}>
        <Route path="contact" element={<Contact />} />
        <Route path="fqa" element={<Questions />} />
        </Route>
      </Route>
    </>
  )
);

export default router;

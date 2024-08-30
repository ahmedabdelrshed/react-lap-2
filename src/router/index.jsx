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
import ErrorPage from "../components/Error/ErrorPage";
import ProductPage from "../components/Pages/ProductPage";
import AddProduct from "../components/Pages/AddProduct";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}>
        <Route index element={<ProductList />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="/help" element={<HelpPage />}>
          <Route path="contact" element={<Contact />} />
          <Route path="fqa" element={<Questions />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);

export default router;

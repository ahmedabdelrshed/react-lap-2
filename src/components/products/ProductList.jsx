import { useFetch } from "../../hooks/useFetch";
import Spinner from "../ui/Spinner";

const ProductList = () => {
  const { data, error, isLoading } = useFetch("http://localhost:8000/products");
  const categories = ["Smartphone", "Laptops"];
  return (
    <div className="container">
      {isLoading && (
       <Spinner/>
      )}
      {data &&
        categories.map((category, index) => (
          <div key={index} className="my-4">
            <h2 className="fw-bold text-primary">{category}</h2>
            {data
              .filter((product) => product.product_category === category)
              .map((product) => (
                <div key={product.product_id} className="my-3">
                  <h3>{product.product_name}</h3>
                  <p className="my-2 p-2">{product.product_desc}</p>
                </div>
              ))}
          </div>
        ))} 
        {error && <h1 className="text-danger">{error}</h1>}
    </div>
  );
};

export default ProductList;

import { useFetch } from "../../hooks/useFetch";
import ProductCard from "../ProductCard";
import Spinner from "../ui/Spinner";

const ProductList = () => {
  const { data, error, isLoading } = useFetch("http://localhost:8000/products");
  const categories = ["Smartphone", "Laptops"];
  console.log(data)
  return (
    <div className="container">
      {isLoading && (
       <Spinner/>
      )}
      {data &&
        categories.map((category, index) => (
          <div key={index} className="row gap-lg-1 justify-content-between my-4">
            <h2 className="fw-bold text-primary">{category}</h2>
            {data
              .filter((product) => product.category === category) 
              .map((product) => (
                <ProductCard key={product.id} name={product.name} description={product.desc} id={product.id} image={product.image} price={product.price} />
              ))}
          </div>
        ))} 
        {error && <h1 className="text-danger">{error}</h1>}
    </div>
  );
};

export default ProductList;

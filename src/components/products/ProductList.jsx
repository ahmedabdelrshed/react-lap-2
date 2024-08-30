import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import ProductCard from "../ProductCard";
import Spinner from "../ui/Spinner";

const ProductList = () => {
  const { data, error, isLoading } = useFetch("http://localhost:8000/products");
  const categories = ["Smartphone", "Laptops"];
  return (
    <div className="container">
      <Link
        to={"/addProduct"}
        className="btn btn-warning d-block mx-auto mt-3 text-center "
        style={{ width: "fit-content" }}
      >
        Add New Product
      </Link>
      {isLoading && <Spinner />}
      {data &&
        categories.map((category, index) => (
          <div key={index} className="row gap-lg-1 justify-content-between ">
            <h2 className="fw-bold text-primary">{category}</h2>
            {data
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.desc}
                  id={product.id}
                  image={product.image}
                  price={product.price}
                />
              ))}
          </div>
        ))}
      {error && <h1 className="text-danger">{error}</h1>}
    </div>
  );
};

export default ProductList;

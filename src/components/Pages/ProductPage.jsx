import { useLocation, useNavigate, useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import { useFetch } from "../../hooks/useFetch";
import Breadcrumbs from "../breadCrumbs/Breadcrumbs";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    data: product,
    error,
    isLoading,
  } = useFetch(`http://localhost:8000/products/${id}`);
  // Handle Delete
  const deleteProduct = () => {
    const deleteConfirm = confirm(
      `Are you sure you want to delete this product`
    );
    if (deleteConfirm) {
      try {
        const res = fetch(`http://localhost:8000/products/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error(`HTTP error! please try again`);
        }
      } catch (error) {
        console.log(error.message);
      }
      navigate("/");
    }
  };
  return (
    <div>
      <Breadcrumbs pathname={location.pathname} />
      {isLoading && <Spinner />}
      {product && (
        <div
          className="card mx-auto my-4"
          id="${product.id}"
          style={{ width: "fit-content" }}
        >
          {
            <img
              className="card-img-top mx-auto"
              src={product.image}
              alt={product.name}
              style={{ height: "368.38px", width: "500px" }}
            />
          }
          <div className="card-body">
            <h4 className="card-title"> {product.name}</h4>
            <p className="card-text">{product.desc}</p>
            <p className="card-text">
              Category :{" "}
              <span className="bg-warning text-dark">{product.category}</span>
            </p>
            <p className="card-text">
              Price :{" "}
              <span className="bg-warning text-dark">{product.price}</span>
            </p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-warning btn-outline-dark">
                Add to Cart
              </button>
              <button
                className="btn btn-danger text-white btn-outline-dark"
                onClick={deleteProduct}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {error && <h1 className="text-danger">{error}</h1>}
    </div>
  );
};

export default ProductPage;

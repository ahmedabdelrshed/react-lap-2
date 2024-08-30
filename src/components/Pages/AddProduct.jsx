import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../breadCrumbs/Breadcrumbs";

/* eslint-disable react/no-unescaped-entities */
const AddProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultProduct = {
    name: "",
    desc: "",
    price: 0,
    image: "",
    category: "",
  };
  const [product, setProduct] = useState(defaultProduct);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };
  // Handle
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validation
    const { name, desc, price, image, category } = product;
    if (!name || !desc || !price || !image || !category) {
      alert("All fields are required!");
      return;
    }
    try {
      const res = await fetch("http://localhost:8000/products", {
        method: "POST",
        body: JSON.stringify(product),
      });
      if (!res.ok) {
        throw new Error("Server Error Please try again");
      }
    } catch (error) {
      alert(error.message);
    }
    alert("product Added successfully");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };
  return (
    <section>
      <button
        className="btn btn-primary px-4 mt-3 text-center "
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <Breadcrumbs pathname={location.pathname} />
      <div className="container-fluid mx-auto">
        <div className="row ">
          <div className="col-lg-10 col-md-8 ml-auto">
            <div className="row align-items-center pt-md-3 mt-md-1 mb-5">
              <div className="col-12">
                <div className="card">
                  <div className="card-title text-center mt-3">
                    <h3>Add Product</h3>
                  </div>
                  <div className="card-body">
                    <form action="" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="productname">Product Name:</label>
                        <input
                          type="text"
                          className="form-control my-2"
                          id="productname"
                          placeholder="Enter Product Name"
                          value={product.name}
                          required
                          name="name"
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Product Name Can't Be Empty
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="product-desc">
                          Product Description:
                        </label>
                        <textarea
                          className="form-control my-2"
                          id="product-desc"
                          placeholder="Enter Product Description"
                          value={product.desc}
                          required
                          name="desc"
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Product ID Can't Be Empty
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="productprice">Product Price:</label>
                        <input
                          type="number "
                          className="form-control my-2"
                          id="productprice"
                          placeholder="Enter Product Price"
                          value={product.price}
                          required
                          name="price"
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Product Price Can't Be Empty
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="productCategory">
                          Product Category:
                        </label>
                        <input
                          type="text "
                          className="form-control my-2"
                          id="productCategory"
                          placeholder="Enter Product Category"
                          value={product.category}
                          required
                          name="category"
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Product Category Can't Be Empty
                        </div>
                      </div>
                      <p>Product Image:</p>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="productimage"
                          required
                          placeholder="Enter Product Image URl"
                          value={product.image}
                          name="image"
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          File format Not Supported
                        </div>
                      </div>
                      <button
                        className="btn btn-dark mt-5 mx-auto d-block"
                        type="submit"
                      >
                        Add Product
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;

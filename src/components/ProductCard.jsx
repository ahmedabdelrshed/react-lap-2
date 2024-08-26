/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const ProductCard = ({name,description,id,image,price}) => {
  return (
    <div className="card col-lg-3  col-md-6 col-sm-6  mt-4" id='${product.id}' >
  {id <= 3 ? (
        <img
          className="card-img-top"
          src={image}
          alt={name}
          style={{ height: "368.38px" }}
        />
      ) : (
        <img className="card-img-top" src={image} alt={name} />
      )}
  <div className="card-body">
      <h4 className="card-title"> {name}</h4>
      <p className="card-text">{description}</p>
      <p className="card-text">Price :  <span className="bg-warning text-dark">{price}</span> 
      </p>
      <Link to={`/product/${id}`} className="btn btn-warning btn-outline-dark" >More Details</Link>
  </div>
  </div>
  )
}

export default ProductCard
function ProductCard({ product }) {
  return (
    <div className='col-md-4 mb-4'>

      <div className='card shadow border-0 h-100'>

        <img
          src={product.imageUrl}
          alt={product.name}
          className='card-img-top product-image'
        />

        <div className='card-body text-center'>

          <h4>{product.name}</h4>

          <p>{product.description}</p>

          <h5 className='text-warning'>
            ₹ {product.price}
          </h5>

          <button className='btn btn-dark w-100 mt-3'>
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard
import ProductCard from '../components/ProductCard'

import candle1 from '../assets/images/candle1.jpg'
import candle2 from '../assets/images/candle2.jpg'
import candle3 from '../assets/images/candle3.jpg'

const products = [
  {
    id: 1,
    name: 'Lavender Candle',
    description: 'Relaxing aroma candle',
    price: 499,
    imageUrl: candle1,
  },

  {
    id: 2,
    name: 'Vanilla Candle',
    description: 'Premium handmade candle',
    price: 599,
    imageUrl: candle2,
  },

  {
    id: 3,
    name: 'Rose Candle',
    description: 'Luxury fragrance candle',
    price: 699,
    imageUrl: candle3,
  },
]

function Home() {
  return (
    <div>

      <section className='hero-section text-light d-flex align-items-center'>
        <div className='container text-center'>

          <h1 className='display-3 fw-bold'>
            Light Up Your Moments
          </h1>

          <p className='lead'>
            Handmade Luxury Scented Candles
          </p>

          <button className='btn btn-warning btn-lg mt-3'>
            Shop Now
          </button>

        </div>
      </section>

      <section className='container py-5'>

        <h2 className='text-center mb-5'>
          Featured Candles
        </h2>

        <div className='row'>

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </div>
  )
}

export default Home
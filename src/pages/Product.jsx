import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState, useEffect } from 'react'
import smartphone from '../assets/smartphone.webp'
import shoes from '../assets/shoes.jpg'
import jacket from '../assets/jacket-2.jpeg'
import headphones from '../assets/headphones.webp'
import laptop from '../assets/laptop.jpg'

// Sample product data (you can fetch this from an API in a real-world scenario)
const productData = [
  {
    id: 1,
    name: 'Smartphone',
    price: 699,
    category: 'Electronics',
    image: smartphone,
    description: 'A powerful smartphone with cutting-edge technology.',
  },
  {
    id: 2,
    name: 'Running Shoes',
    price: 129,
    category: 'Shoes',
    image: shoes,
    description:
      'Comfortable running shoes with excellent grip and durability.',
  },
  {
    id: 3,
    name: 'Leather Jacket',
    price: 250,
    category: 'Clothing',
    image: jacket,
    description: 'A stylish leather jacket for all seasons.',
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    price: 150,
    category: 'Accessories',
    image: headphones,
    description:
      'Noise-canceling wireless headphones with amazing sound quality.',
  },
  {
    id: 5,
    name: 'Laptop',
    price: 999,
    category: 'Electronics',
    image: laptop,
    description: 'A high-performance laptop for work and entertainment.',
  },
]

const Product = () => {
  const { id } = useParams()
  const { addItem } = useCart()
  const [product, setProduct] = useState(null)

  // Fetch product details based on URL parameter
  useEffect(() => {
    const selectedProduct = productData.find((p) => p.id === parseInt(id))
    setProduct(selectedProduct)
  }, [id])

  if (!product) {
    return (
      <div id="main-content">
        <div className="container py-5 text-center">
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div id="main-content">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Product Image */}
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow-lg"
              style={{ height: '400px', objectFit: 'contain' }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">{product.name}</h2>
            <h4 className="text-success fw-bold mb-3">
              ${product.price.toFixed(2)}
            </h4>
            <p className="text-muted">{product.description}</p>
            <p className="fw-bold">
              Category: <span className="text-primary">{product.category}</span>
            </p>
            <div className="mt-4">
              <button
                className="btn btn-primary btn-lg me-3"
                onClick={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }
              >
                Add to Cart
              </button>
              <a href="/" className="btn btn-outline-secondary btn-lg">
                Back to Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

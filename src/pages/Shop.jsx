import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

import smartphone from '../assets/smartphone.webp'
import shoes from '../assets/shoes.jpg'
import jacket from '../assets/jacket-2.jpeg'
import headphones from '../assets/headphones.webp'
import laptop from '../assets/laptop.jpg'

const Shop = () => {
  const { addItem } = useCart()
  const [categories] = useState([
    'All',
    'Electronics',
    'Clothing',
    'Accessories',
    'Shoes',
  ])
  const [products] = useState([
    {
      id: 1,
      name: 'Smartphone',
      price: 699,
      category: 'Electronics',
      image: smartphone,
      description: 'A high-quality smartphone with advanced features.',
    },
    {
      id: 2,
      name: 'Running Shoes',
      price: 129,
      category: 'Shoes',
      image: shoes,
      description:
        'Comfortable and durable running shoes for all types of activities.',
    },
    {
      id: 3,
      name: 'Leather Jacket',
      price: 250,
      category: 'Clothing',
      image: jacket,
      description: 'A stylish and warm leather jacket for all seasons.',
    },
    {
      id: 4,
      name: 'Wireless Headphones',
      price: 150,
      category: 'Accessories',
      image: headphones,
      description:
        'High-quality wireless headphones with noise-cancelling technology.',
    },
    {
      id: 5,
      name: 'Laptop',
      price: 999,
      category: 'Electronics',
      image: laptop,
      description:
        'A powerful laptop with a high-resolution display and long battery life.',
    },
  ])

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000])

  // Filtered products based on search, category, and price
  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    )
  })

  return (
    <div id="main-content">
      <div className="container py-5">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-md-3 border-end">
            <h4 className="fw-bold fs-5 text-muted">Filter Products</h4>

            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="form-control"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <h5 className="fw-bold fs-6">Category</h5>
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-4">
              <h5 className="fw-bold fs-6">Price Range</h5>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                className="form-range"
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              />
              <p>Up to ${priceRange[1]}</p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-md-9">
            <h2 className="fw-bold fs-3 mb-4">Products</h2>

            {filteredProducts.length === 0 ? (
              <p className="text-muted">
                No products found matching your criteria.
              </p>
            ) : (
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col">
                    <div className="card h-100 border-0 shadow-sm">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none text-dark"
                      >
                        <img
                          src={product.image}
                          alt={product.description}
                          className="card-img-top"
                          style={{ height: '200px', objectFit: 'contain' }}
                        />
                      </Link>
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold">{product.name}</h5>
                        <p className="card-text text-success fs-5 fw-bold">
                          ${product.price.toFixed(2)}
                        </p>
                        <button
                          className="btn btn-primary w-100"
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop

import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('https://proshop.dev/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen

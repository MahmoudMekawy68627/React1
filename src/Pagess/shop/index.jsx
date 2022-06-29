import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const Shop = () => {

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }


  const [products, setProducts] = useState([]);
  console.log("products state", products);

  return (
    <div className='products-wrapper mx-auto w-75'>
      <h1 className='text-center'>Shop</h1>


      <div className='products row '>

      {
        products.map((item, index) => {
          return (
            <Link to={`/product/${item.id}`} key={index} className='single-product col-md-4 '>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image}/>
                <hr />
                <Card.Body>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <hr />
                  <h3>{item.price}</h3>

                </Card.Body>
              </Card>

            </Link>
          )
        })
      }
      </div>


    </div>
  )
}

export default Shop
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const Product = () => {

    const urlParams = useParams();
    console.log("urlParams", urlParams);

    useEffect(() => {
        fetchProduct()
    }, [])


    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }

    const [product,setProduct]= useState ({})

    return (
        <div className='d-flex justify-content-center'>

        <Card className='my-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image}/>
                
                <Card.Body>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <hr />
                  <h3>{product.price}</h3>

                </Card.Body>
        </Card>
        </div>
    )
}

export default Product

import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Prodrating from './Prodrating';




export default function Prodcomp(props) {

  const { product} = props
  return (
  
    
      <Card >
            <Link to= {`/product/${product.slug}`}>
            <img src = {product.image}  className="card-img-top" alt = {product.name}/> </Link>

          <Card.Body>
          <Link to = {`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
          </Link>
          <Prodrating ratings = {product.ratings} reviewz = {product.reviewz}/>
          <Card.Title>N{product.price}</Card.Title>
          <Button variant = 'danger'>Add To Cart</Button>
          </Card.Body>
          </Card>
 
  )
}

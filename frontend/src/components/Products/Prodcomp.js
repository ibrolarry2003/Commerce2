import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Prodrating from './Prodrating';
import { Store } from '../../Store/Store';
import axios from 'axios';

export default function Prodcomp(props) {

  const { product} = props
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
      <Card>
            <Link to= {`/product/${product.slug}`}>
            <img src = {product.image}  className="card-img-top" alt = {product.name}/> 
            </Link>
          <Card.Body>
          <Link to = {`/product/${product.slug}`} className= 'link-underline'>
          <Card.Title>{product.name}</Card.Title>
          </Link>
          <Prodrating rating = {product.rating} reviewz = {product.reviewz}/>
          <Card.Text>N{product.price}</Card.Text>

          {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}


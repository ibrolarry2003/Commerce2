import React, { useContext, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { productReducerOne } from '../Reducers/reducers';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import Prodrating from './Prodrating';
import LoadingBox from '../Spinner/Loadingbox';
import Loadingerror from '../Spinner/Loadingerror';
import { getError } from '../../utils';
import { Store } from '../../Store/Store';

const reducer = productReducerOne;

function Prodscreen() {

  const navigate = useNavigate();
  const params = useParams();
  const {slug} = params

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
      });
      
      useEffect(() => {
      
        const fetchData = async () => {
    
          dispatch({ type: 'FETCH_REQUEST' });
          try {
            const result = await axios.get(`/api/products/slug/${slug}`);
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
          }
        };
        fetchData();
      }, [slug]);
      
      const { state, dispatch: ctxDispatch } = useContext(Store);

      const { cart } = state;

      const addToCartHandler = async () => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
          window.alert('Sorry. Product is out of stock');
          return;
        }
        ctxDispatch({
          type: 'CART_ADD_ITEM',
          payload: { ...product, quantity},
        });
        navigate('/cart');
      };

     
  return (

    loading ? (
        <LoadingBox/>
      ) : error ? (
        <Loadingerror variant="danger"> {error}</Loadingerror>
      ) : (
      <div> 
          
         <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          />
            
        </Col>
        <Col md={3}>
        <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Prodrating
                rating={product.rating}
                reviewz={product.reviewz}
              ></Prodrating>
            </ListGroup.Item>
            <ListGroup.Item>Price : N{product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
        <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>N{product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="danger">Add to Cart</Button>
                    </div>
                  
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>

        </Col>

        </Row>
          
          </div>
      )  
  )
  }
export default Prodscreen

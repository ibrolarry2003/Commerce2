import React, { useEffect, useReducer} from 'react'
import axios from 'axios'
import { productReducer } from '../Reducers/reducers'
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Prodcomp from './Prodcomp';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../Spinner/Loadingbox';
import Loadingerror from '../Spinner/Loadingerror';

const reducer = productReducer;

export default function Products() {

const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
  products: [],
  loading: true,
  error: '',
});

useEffect(() => {

  const fetchData = async () => {
   
    dispatch({ type: 'FETCH_REQUEST' });
    try {
      const result = await axios.get('/api/products');
      dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
    } catch (err) {
      dispatch({ type: 'FETCH_FAIL', payload: err.message });
    }
  };
  fetchData();
}, []);

  return (
    <div>
      <Helmet>
        <title>Products Page</title>
        </Helmet>
      <main>
        <h1>Feature Products</h1>
    <div className = 'products'>
    {
      loading ? (
        <LoadingBox/>
      ) : error ? (
        <Loadingerror variant="danger"> {error}</Loadingerror>
      ) : (
        <Row>
    {products.map(product => (
      
      <Col key= {product.slug} sm={6} md={4} lg={3} className="mb-3">
          <Prodcomp product = {product}/>
          </Col>
        ))}
        </Row>
        )} 
    </div>
      </main>
    </div>
  )
}

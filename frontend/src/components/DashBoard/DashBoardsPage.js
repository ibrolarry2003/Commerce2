import React, { useContext, useEffect, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Dashboardreducer } from '../Reducers/reducers';
import { Store } from '../../Store/Store';
import { getError } from '../../utils';
import LoadingBox from '../Spinner/Loadingbox';
import Loadingerror from '../Spinner/Loadingerror';
import Chart from 'react-google-charts';
import { Helmet } from 'react-helmet-async';



const reducer = Dashboardreducer;

function DashboardPage() {

    const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
      });
      const { state } = useContext(Store);
      const { userInfo } = state;
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get('/api/orders/summary', {
              headers: { Authorization: `Bearer ${userInfo.token}` },
            });
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
          } catch (err) {
            dispatch({
              type: 'FETCH_FAIL',
              payload: getError(err),
            });
          }
        };
        fetchData();
      }, [userInfo]);
    
      return (
        <div>
           <Helmet>
          <title>Company DashBoard</title>
        </Helmet>
          <h1>Company Dashboard</h1>
          {loading ? (
            <LoadingBox/>
          ) : error ? (
            <Loadingerror variant="danger">{error}</Loadingerror>
          ) : (
            <>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {summary.users && summary.users[0]
                          ? summary.users[0].numUsers
                          : 0}
                      </Card.Title>
                      <Card.Text> Users</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {summary.orders && summary.users[0]
                          ? summary.orders[0].numOrders
                          : 0}
                      </Card.Title>
                      <Card.Text> Orders</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        N
                        {summary.orders && summary.users[0]
                          ? summary.orders[0].totalSales.toFixed(2)
                          : 0}
                      </Card.Title>
                      <Card.Text> Orders</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <div className="my-3">
                <h2>Sales</h2>
                {summary.dailyOrders.length === 0 ? (
                  <Loadingerror>No Sale</Loadingerror>
                ) : (
                  <Chart
                    width="100%"
                    height="400px"
                    chartType="AreaChart"
                    loader={<div>Loading Chart...</div>}
                    data={[
                      ['Date', 'Sales'],
                      ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                    ]}
                  ></Chart>
                )}
              </div>
              <div className="my-3">
                <h2>Categories</h2>
                {summary.productCategories.length === 0 ? (
                  <Loadingerror>No Category</Loadingerror>
                ) : (
                  <Chart
                    width="100%"
                    height="400px"
                    chartType="PieChart"
                    loader={<div>Loading Chart...</div>}
                    data={[
                      ['Category', 'Products'],
                      ...summary.productCategories.map((x) => [x._id, x.count]),
                    ]}
                  ></Chart>
                )}
              </div>
            </>
          )}
        </div>
      );
    }


export default DashboardPage;


import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react'
import { Helmet } from 'react-helmet-async';
import { Store } from '../../Store/Store';
import { getError } from '../../utils';
import { UserListreducer } from '../Reducers/reducers';
import LoadingBox from '../Spinner/Loadingbox';
import Loadingerror from '../Spinner/Loadingerror';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const reducer = UserListreducer;

function UserList() {
    const navigate = useNavigate();
    const [{ loading, error, users, loadingDelete, successDelete }, dispatch] =
      useReducer(reducer, {
        loading: true,
        error: '',
      });
  
    const { state } = useContext(Store);
    const { userInfo } = state;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          dispatch({ type: 'FETCH_REQUEST' });
          const { data } = await axios.get(`/api/users`, {
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
      if (successDelete) {
        dispatch({ type: 'DELETE_RESET' });
      } else {
        fetchData();
      }
    }, [userInfo, successDelete]);
  
    const deleteHandler = async (user) => {
      if (window.confirm('Are you sure to delete?')) {
        try {
          dispatch({ type: 'DELETE_REQUEST' });
          await axios.delete(`/api/users/${user._id}`, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          });
          toast.success('user deleted successfully');
          dispatch({ type: 'DELETE_SUCCESS' });
        } catch (error) {
          toast.error(getError(error));
          dispatch({
            type: 'DELETE_FAIL',
          });
        }
      }
    };
    return (
      <div>
        <Helmet>
          <title>Users</title>
        </Helmet>
        <h1>Users</h1>
  
        {loadingDelete && <LoadingBox></LoadingBox>}
        {loading ? (
          <LoadingBox/>
        ) : error ? (
          <Loadingerror variant="danger">{error}</Loadingerror>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>IS ADMIN</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                  <td>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => navigate(`/admin/user/${user._id}`)}
                    >
                      Edit
                    </Button>
                    &nbsp;
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => deleteHandler(user)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }

export default UserList

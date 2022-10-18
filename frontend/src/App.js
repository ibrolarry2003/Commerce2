import HomePage from "./components/HomePage";
import { Route, Routes } from 'react-router-dom';
import Products from "./components/Products/products";
import Prodscreen from "./components/Products/prodscreen";
import Container from "react-bootstrap/esm/Container";
import Shoppingcart from "./components/CartScreeen/Shoppingcart";
import SigninScreen from "./components/Authentication/SigninScreen";
import ShippingAddress from "./components/CartScreeen/ShippingAddress";
import Signup from "./components/Authentication/Signup";
import Payments from "./components/CartScreeen/PaymentSection/Payments";
import PlaceOrder from "./components/CartScreeen/PaymentSection/PlaceOrder";
import OrderPage from "./components/CartScreeen/PaymentSection/OrderPage";
import OrderHistory from "./components/CartScreeen/OrderHistoryPages/OrderHistory";
import ProfilePage from "./components/Profile/ProfilePage";
import SearchPage from "./components/NavBar/SearchPage";
import ProtectedRoute from "./components/DashBoard/ProtectedRoute";
import AdminRoute from "./components/DashBoard/AdminRoute";
import DashboardPage from "./components/DashBoard/DashBoardsPage";
import ProductListPage from "./components/DashBoard/ProductListPage";
import ProductEditPage from "./components/DashBoard/ProductEditPage";
import OrderlistPage from "./components/DashBoard/OrderlistPage";
import UserList from "./components/DashBoard/userList";
import UserEdit from "./components/DashBoard/UserEdit";

function App() {
  return (
   <div>   
      <Container>
      <Routes>
       <Route path="/" element={ <HomePage/>} />
       <Route path="/product" element={  <Products/>} />
       <Route path="/product/:slug" element={  <Prodscreen/>} />
       <Route path="/cart" element={  <Shoppingcart/>} />
       <Route path="/signin" element={  <SigninScreen/>} />
       <Route path="/shipping" element={  <ShippingAddress/>} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/payment" element={<Payments />} />
       <Route path="/placeorder" element={<PlaceOrder />} />
      
       <Route path= "/order/:id" 
       element = {
        <ProtectedRoute>
       <OrderPage />
       </ProtectedRoute>
       } />
       <Route path="/orderhistory" element={
       <ProtectedRoute>
       <OrderHistory />
       </ProtectedRoute>
       } />
       <Route path="/profile" 
       element=
       {<ProtectedRoute>
       <ProfilePage />
       </ProtectedRoute>
       } />
       <Route path="/search" element={<SearchPage />} />
       <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardPage />
                  </AdminRoute>
                }
              />
                 <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderlistPage />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListPage />
                  </AdminRoute>
                }
              />
                  <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditPage />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserList />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEdit/>
                  </AdminRoute>
                }
              />
            
       </Routes>
       </Container>
    
   </div>
  );
}
export default App;

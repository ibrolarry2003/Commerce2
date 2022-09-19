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
       <Route path= "/order/:id" element = {<OrderPage />} />
       <Route path="/orderhistory" element={<OrderHistory />} />
       <Route path="/profile" element={<ProfilePage />} />
       <Route path="/search" element={<SearchPage />} />

       </Routes>
       </Container>
    
   </div>

 
  );
}

export default App;

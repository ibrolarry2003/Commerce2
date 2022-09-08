import Home from "./components/home";
import { Route, Routes } from 'react-router-dom';
import Products from "./components/Products/products";
import Prodscreen from "./components/Products/prodscreen";
import Container from "react-bootstrap/esm/Container";



function App() {
  return (
   <div>
         
      <Container>
          <Routes>
       <Route path="/" element={ <Home/>} />
       <Route path="/product" element={  <Products/>} />
       <Route path="/product/:slug" element={  <Prodscreen/>} />
       </Routes>
       </Container>
    
   </div>

 
  );
}

export default App;

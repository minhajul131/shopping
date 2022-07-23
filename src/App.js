import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";
import Review from "./components/Review/Review";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Shipment from "./components/Shipment/Shipment";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h4>email: {loggedInUser.email}</h4>
      
      <Header></Header>
      <BrowserRouter>
      
        <Routes>
        
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/inventory" element={<PrivateRoute><Inventory /></PrivateRoute>} />
          <Route path="/shipment" element={<PrivateRoute><Shipment /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productKey" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

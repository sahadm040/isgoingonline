import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Product from "./components/product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

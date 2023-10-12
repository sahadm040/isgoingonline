import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./components/Counter";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;

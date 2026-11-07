import Products from "./components/Products";
import "./App.css";
const products = [
  { id: 1, name: "Milk", price: 20, quantity: 3 },
  { id: 2, name: "Bread", price: 10, quantity: 1 },
  { id: 3, name: "Eggs", price: 5, quantity: 12 },
];

function App() {
  return (
    <>
      <h1>Mini Shopping Cart</h1>
      <Products products={products} />
    </>
  );
}

export default App;

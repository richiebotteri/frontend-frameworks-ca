import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/pages/HomePage";
import ContactPage from "./components/pages/ContactPage";
import ProductPage from "./components/pages/ProductPage";
import CartPage from "./components/pages/CartPage";
import CheckoutSuccessPage from "./components/pages/CheckoutSuccessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<h1>Route not found</h1>} />
        <Route index element={<HomePage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/CheckoutSuccessPage" element={<CheckoutSuccessPage />} />
        <Route path="/ProductPage/:title" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;

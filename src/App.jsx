import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<h1>Route not found</h1>} />
        <Route index element={<HomePage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route index element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;

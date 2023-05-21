import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

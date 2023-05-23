import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import { createContext, useState } from "react";

const testContext = createContext();

function App() {
  const { state, setState } = useState("test");
  return (
    <testContext.Provider value={{ state, setState }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<h1>Route not found</h1>} />
          <Route index element={<HomePage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Route>
      </Routes>
    </testContext.Provider>
  );
}

export default App;

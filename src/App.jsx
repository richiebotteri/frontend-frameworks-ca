import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import { createContext, useState } from "react";

export const SearchQueryContext = createContext();

function App() {
  const [queryContext, setQueryContext] = useState("test");

  return (
    <SearchQueryContext.Provider value={{ queryContext, setQueryContext }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<h1>Route not found</h1>} />
          <Route index element={<HomePage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Route>
      </Routes>
    </SearchQueryContext.Provider>
  );
}

export default App;

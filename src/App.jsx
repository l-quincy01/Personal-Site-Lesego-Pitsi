import "./App.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./index_page/IndexPage";
import { useState, useEffect } from "react";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(
  //   localStorage.getItem("darkMode") === "true" || false
  // );

  // useEffect(() => {
  //   document.body.className = isDarkMode ? "dark" : "";
  // }, [isDarkMode]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

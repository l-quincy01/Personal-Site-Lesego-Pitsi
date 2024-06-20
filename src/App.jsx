import "./App.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./index_page/IndexPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  );
}

export default App;

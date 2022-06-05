import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";
import Gists from "./pages/Gists";
import Home from "./pages/Home";
import Repo from "./pages/Repo";
import PrivateRoute from "./component/PrivateRouter";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="repos" element={<Repo />} />
            <Route path="/gists" element={<Gists />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";
import Gists from "./pages/Gists";
import Home from "./pages/Home";
import Repo from "./pages/Repo"

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Repo />} />
          <Route path="/gists" element={<Gists />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

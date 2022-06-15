import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Repos from "./pages/Repos/Repos";
import Repo from "./pages/Repo/Repo";
import PrivateRoute from "./component/PrivateRoute/PrivateRouter";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Header from "./component/Header/Header";

import "./GlobalStyle.css";

function App() {
  return (
    <div className="wrapApp">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/repos" element={<Repos />} />
            <Route path="/repos/:name" element={<Repo />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

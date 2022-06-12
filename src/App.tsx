import React from "react";
import { Route, Routes } from "react-router-dom";

import Gists from "./pages/Gists/Gists";
import Gist from "./pages/Gist/Gist";
import Home from "./pages/Home/Home";
import Repos from "./pages/Repos/Repos";
import Repo from "./pages/Repo/Repo";
import PrivateRoute from "./component/privateRoute/PrivateRouter";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Header from "./component/header/Header";
import Login from "./component/Login/LoginButton";

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
            <Route path="/gists" element={<Gists />} />
            <Route path="/gists/:description" element={<Gist />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

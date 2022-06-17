import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Repos from "./pages/repositories/repositories";
import Repo from "./pages/repositorie/repositorie";
import PrivateRoute from "./component/privateRoute/privateRouter";
import NotFoundPage from "./pages/notFound/notFoundPage";
import Header from "./component/header/header";
import Auth from "./component/auth/auth";

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
          <Route path="auth" element={<Auth />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

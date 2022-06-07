import React, { createContext, useEffect, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";
import Gists from "./pages/Gists/Gists";
import Home from "./pages/Home/Home";
import Repos from "./pages/Repos/Repos";
import Repo from "./pages/Repo/Repo";
import PrivateRoute from "./component/privateRoute/PrivateRouter";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

import { Wrapper, Content } from "./App.styled";
import Loading from "./component/Loading/Loading";
import { initialState, reducer } from "./store/reducer/reducer";

function App() {
  let AppContext = createContext(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/repos" element={<Repos />} />
              <Route path="repos/:name" element={<Repo />} />
              <Route path="/gists" element={<Gists />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Content>
        <Footer />
      </Wrapper>
    </AppContext.Provider>
  );
}

export default App;

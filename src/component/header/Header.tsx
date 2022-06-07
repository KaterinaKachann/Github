import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { ActionKind, reducer } from "../../store/reducer/reducer";
import { Header, Title, NavLink, Button, NavMenu } from "./Header.styled";

function HeaderComponent() {
  const [state, dispatch] = useReducer(reducer, { isLogin: false });
  return (
    <Header>
        <div>
          <Link to="/">
            <Title>OAuth</Title>
          </Link>
        </div>

        <div>
          <NavMenu>
            <Link to="/repos">
              <NavLink>Repos</NavLink>
            </Link>
            <Link to="/gists">
              <NavLink>Gists</NavLink>
            </Link>
            <Button onClick={() => console.log(dispatch({ type: ActionKind.LOGIN, payload: false }))}>Log out</Button>
          </NavMenu>
        </div>
    </Header>
  );
}
export default HeaderComponent;

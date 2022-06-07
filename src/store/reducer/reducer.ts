
export const initialState = {
    isLogin: true || false, 
}

interface State {
    isLogin: boolean;
}

export enum ActionKind {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
  }

interface Action {
    payload: any;
    type: ActionKind;
  }

export const reducer = (state: State, action: Action) => {

    switch (action.type) {
        case ActionKind.LOGIN: {
            return {
                ...state,
                isLogin: action.payload.isLogin,
              };
        }
        case ActionKind.LOGOUT: {
            return {
                ...state,
                isLogin: action.payload.isLogin,
              };
        }
      
    default:
      return state;
    }
}
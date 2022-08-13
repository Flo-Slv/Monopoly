import {
  useContext,
  createContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";
  
const UserContext = createContext();
  
const actionTypes = {
  setUsername: "setUsername",
  setUrlAvatar: "setUrlAvatar",
};
  
const reducer = (state, action) => {
  switch (action.type) {
  case actionTypes.setUsername:
    return {
      ...state,
      username: action.payload.username,
    };
  case actionTypes.setUrlAvatar:
    return {
      ...state,
      series: action.payload.urlAvatar,
    };
  default:
    throw new Error("Action non supportée");
  }
};
  
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {});
  
  const setUsername = useCallback((username) => {
    dispatch({
      type: actionTypes.setUsername,
      payload: { username },
    });
  }, []);

  const setUrlAvatar = useCallback((urlAvatar) => {
    dispatch({
      type: actionTypes.setUrlAvatar,
      payload: { urlAvatar },
    });
  }, []);
  
  const { idUser, username, email, urlAvatar } = state;
  
  const value = useMemo(() => {
    return {
      idUser, username, email, urlAvatar,
      setUsername,
      setUrlAvatar,
    };
  }, [
    idUser, username, email, urlAvatar,
    setUsername,
    setUrlAvatar,
  ]);
  
  return <UserContext.Provider value={value} {...props} />;
};
  
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useGlobal doit etre dans GlobalProvider");
  }
  return context;
};
  
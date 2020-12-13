import React, {createContext, useReducer} from 'react';

const initialState = {};
const UserContext = createContext(initialState);
const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "action description":
        const newState;
        return newState;
      default:store;
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { UserContext, UserProvider };
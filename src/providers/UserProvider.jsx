import React, { useState } from "react";
import {UserContext} from '../contexts/User';

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const { Provider } = UserContext;

  return (
    <Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </Provider>
  );
};

export default UserProvider;

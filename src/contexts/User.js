/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from 'react';

const User = {
  userData: {
    token: undefined,
    user: {},
  },
  setUserData: () => {},
};

export const UserContext = createContext(User);
export const UseUserContext = () => useContext(UserContext);
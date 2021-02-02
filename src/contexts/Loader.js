/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from 'react';

const LoaderDetails = {
  LoaderOpened: false,
  setLoaderOpened: () => { },
};

const LoaderContext = createContext(LoaderDetails);
const UseLoaderContext = () => useContext(LoaderContext);

export { LoaderContext, UseLoaderContext };

import React, { useState } from 'react';
import { LoaderContext } from '../contexts/Loader';

const LoaderProvider = (
  { children }
) => {
  const [LoaderOpened, setLoaderOpened] = useState(false);
  const { Provider } = LoaderContext;
  return (
    <Provider
      value={{
        LoaderOpened,
        setLoaderOpened,
      }}
    >
      {children}
    </Provider>
  );
};

export default LoaderProvider;

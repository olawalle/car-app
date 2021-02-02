import React, { useState } from 'react';
import ToastContext from '../contexts/Toast';

const ToastProvider = (
  { children }
) => {
  const [ToastOpened, setToastOpened] = useState(false);
  const [ToastContent, setToastContent] = useState('');
  const [ToastStyles, setToastStyles] = useState({
  });
  const { Provider } = ToastContext;
  const initialStyle = {
    backgroundColor: '#A52A2A',
    color: 'white',
  };
  return (
    <Provider value={{
      ToastOpened,
      setToastOpened,
      ToastContent,
      setToastContent,
      ToastStyles: { ...initialStyle, ...ToastStyles },
      setToastStyles,
    }}
    >
      {children}
    </Provider>
  );
};

export default ToastProvider;

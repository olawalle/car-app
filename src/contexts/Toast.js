/* eslint-disable no-unused-vars */
import React, {createContext} from 'react';

const ToastDetails = {
  ToastOpened: false,
  setToastOpened: () => { },
  ToastContent: '',
  setToastContent: () => { },
  ToastStyles: {},
  setToastStyles: () => { },
};

const ToastContext = createContext(ToastDetails);

export default ToastContext;

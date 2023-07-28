// AppContext.js
import React, { createContext, useState } from 'react';

const initialState = {}; // Defina o estado inicial apropriado para sua aplicação

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

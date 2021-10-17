import { createContext, useContext, useReducer } from 'react';

const ClimaContext = createContext();

export const ClimaProvider = ({ reducer, initialState, children }) => {
  return (
    <ClimaContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ClimaContext.Provider>
  );
};

export const useClimaValues = () => useContext(ClimaContext);

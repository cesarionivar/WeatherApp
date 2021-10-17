import { createContext, useContext, useReducer } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ reducer, initialState, children }) => {
  return (
    <MenuContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuValues = () => useContext(MenuContext);

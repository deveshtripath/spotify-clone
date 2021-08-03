import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* {children}                  this is app which is present in index.js */}
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
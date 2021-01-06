import React, { createContext, useContext, useReducer } from 'react';

export const Statecontext = createContext()

export const Stateprovider = ({initialState,reducer, children}) => (
    <Statecontext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </Statecontext.Provider>
)

export const useStatevalue = () => useContext(Statecontext)
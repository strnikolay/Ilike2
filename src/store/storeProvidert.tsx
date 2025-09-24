'use client'
import React, { createContext, useContext } from 'react';
//import { enableStaticRendering } from "mobx-react-lite";
import {Store} from './store';

/*
// Create a store container with all stores
const store = {Store};
interface State {Store: typeof Store;}
// Create context
//const StoreContext = createContext<State>({Store});
const StoreContext = createContext({store});*/
interface State {Store: typeof Store;}

/*const IS_SSR = typeof window === 'undefined';
enableStaticRendering(IS_SSR);
const StoreContext = createContext<State | null>(Store);*/

//const store = {Store};
const StoreContext = createContext<State>({Store});

// Provider component
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreContext.Provider value={{Store}}>
      {children}
    </StoreContext.Provider>
  );
};

// Hook to use the store in components
export const useStore = () => useContext(StoreContext);
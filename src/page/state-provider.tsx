import { ReactNode } from "react";
import { createContext, useReducer, useEffect } from "react";
import { AppState, ProviderState } from "../types/app-types";
import { appReducer } from "../library/app-reducer";

export const emptyState: AppState = {
  isLoaded: false,
}

// not that ProviderState contains AppState and a dispatch function
export const AppContext = createContext<ProviderState>({ state: emptyState });

export interface StateProviderProps {
  children?: ReactNode | ReactNode[];
  initState?: AppState;
}

export const StateProvider = ({ children, initState = emptyState }: StateProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, {...emptyState, ...initState});

  useEffect(() => {
    // use this to manage the initial state if it comes in as a prop from the app-root
    // console.log('ROOT:', {...state});
    // you can also dispatch the initial state here if you want
    // this might be useful, but, carries one more render
    // dispatch({ type: 'InitState', payload: initState })
  }, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}



import { useContext, createContext } from "react";

//API to create new context for app
export const AppContext = createContext(null);

//React Hook to access context
export function useAppContext() {
  return useContext(AppContext);
}
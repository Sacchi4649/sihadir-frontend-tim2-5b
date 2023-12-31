import { createContext, useState, useCallback, useContext } from "react";

const AppContext = createContext({});
const { Provider } = AppContext;

export const Consumer = AppContext.Consumer;

export const AppProvider = ({ children, initialState = {} }: any) => {
  const [state, setActualState] = useState(initialState);

  const setState = useCallback((newState: any, preUpdate: any) => {
    setActualState((prevState: any) => {
      if (preUpdate && preUpdate.call) {
        preUpdate();
      }
      return { ...prevState, ...newState };
    });
  }, []);

  const updateState = useCallback(
    (updateFunction: any) => setActualState(updateFunction),
    []
  );

  const appContextValue = {
    globalState: { ...initialState, ...state },
    setState,
    updateState,
  };

  return <Provider value={appContextValue}>{children}</Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;

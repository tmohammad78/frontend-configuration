import * as React from "react";

const DataContext = React.createContext();

function dataReducer(state, action) {
  switch (action.type) {
    case "auth": {
      return {
        auth: {
          ...state.auth,
          ...action.data,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DataProvider({ children }) {
  const [state, dispatch] = React.useReducer(dataReducer, {
    auth: null,
  });
  const value = { state, dispatch };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

function useData() {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a Provider");
  }
  return context;
}

export { DataProvider, useData };

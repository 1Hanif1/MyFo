// DataContext.js
import { createContext, useContext } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
  // Get Data from Local Storage, if does not exist, create empty object
  const [value, setValue] = useLocalStorageState({}, 'user_data');

  return (
    <DataContext.Provider value={{ value, setValue }}>
      {children}
    </DataContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useData(){
  return useContext(DataContext);
}
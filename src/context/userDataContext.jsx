// DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
    // Get Data from Local Storage, if does not exist, create empty object
    const userData = localStorage.getItem('userData');
  const [data, setData] = useState(userData ? userData: {});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useData(){
  return useContext(DataContext);
}
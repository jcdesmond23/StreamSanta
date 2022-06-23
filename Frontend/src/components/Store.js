import { useState, createContext } from 'react';

const initialService = 6;

export const Context = createContext();

const Store = ({children}) => {
    const[service, setService] = useState(initialService);

    return (
        <Context.Provider value={[service, setService]}>{children}</Context.Provider>
    );
};

export default Store;
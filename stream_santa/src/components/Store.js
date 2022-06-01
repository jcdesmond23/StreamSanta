import { useState, createContext } from 'react';

const initialService = {
    service: "none"
};

export const Context = createContext();

const Store = ({children}) => {
    const[service, setService] = useState(initialService);

    return (
        <Context.Provider value={[service, setService]}>{children}</Context.Provider>
    );
};

export default Store;
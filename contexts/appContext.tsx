import React, {  createContext, ReactNode, useContext, useState } from "react";
import { Tenant } from "../types/Tenant"

type appContextType = {
    tenant: Tenant | null
    setTenant: (newTenant: Tenant) => void;
};

const defaultValues: appContextType = {
    tenant: null,
    setTenant: () => null
};

// context
const appContext = createContext<appContextType>(defaultValues);
// hook
export const useAppContext = () => useContext(appContext)
// provider
type Props ={
    children: ReactNode
}
export const AppContextProvider = ({children}: Props) => {
    const [tenant, setTenant] = useState<Tenant | null>(null)
    return (
        <appContext.Provider value={{tenant, setTenant}}>
            {children}
        </appContext.Provider>
    )
}

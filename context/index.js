
import React,{createContext,} from "react";


export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const teste = "teste"
    return(
        <AuthContext.Provider 
          value={{ teste }}>
            {children}
        </AuthContext.Provider>
    )

}
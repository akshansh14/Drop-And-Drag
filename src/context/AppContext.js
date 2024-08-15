import { createContext, useState } from "react";


export const AppContext = createContext();

export default function AppContextProvider({children}){
   
    
    const [cardData,setCardData]=useState([])
   
    


    

    const Value={
        cardData,
        setCardData,
       
        }

    return <AppContext.Provider value={Value}>
        {children}
        </AppContext.Provider>
}
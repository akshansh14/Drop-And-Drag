import { createContext, useState } from "react";


export const AppContext = createContext();

export default function AppContextProvider({children}){
   
    const [cardData,setCardData]=useState({title:"" , desccription:""})
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const openModal =()=>{
        setIsModalOpen(true);
        console.log(isModalOpen)
      }
    
      const closeModal =()=>{
        setIsModalOpen(false);
      }
    


    

    const Value={
        cardData,
        setCardData,
        openModal,
        closeModal,
        isModalOpen,
        setIsModalOpen
        }

    return <AppContext.Provider value={Value}>
        {children}
        </AppContext.Provider>
}
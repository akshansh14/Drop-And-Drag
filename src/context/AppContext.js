import { createContext, useState } from "react";
import React from "react";



export const AppContext = createContext();

//data is taken from this url
// eslint-disable-next-line
const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
export default function AppContextProvider({children}){
    
 const [cardData,setCardData]=useState([
    {
        id: 0, 
        ref: React.createRef() ,
        title:"Jane Doe" , 
        description: "As we enter a new year, it's important to take stock of where AI is heading. Here are 10 trends to watch in 2023, including the rise of responsible AI, the use of AI in personalized medicine, and the impact of quantum computing on AI algorithms"
    },
    {
        id: 1, 
        ref: React.createRef() ,
        title:"Megan Jones" , 
        description: "Software engineering requires a range of skills beyond coding. This post outlines five key skills for success in software engineering, including communication, problem-solving, testing, and collaboration."
    },
    {
        id: 2, 
        ref: React.createRef() ,
        title:"John Smith" , 
        description: "Software engineering is often thought of as just writing code, but it's much more than that. This post explores the key skills needed to be a successful software engineer, including communication, collaboration, project management, and testing."
    },
    {
        id: 3, 
        ref: React.createRef() ,
        title:"Samantha Lee" , 
        description: "Web development is a rapidly growing field with many career opportunities. This post outlines the key skills needed to succeed in web development, as well as tips for building a strong portfolio, networking, and finding the right job."
    },
    {
        id: 4, 
        ref: React.createRef() ,
        title:"David Chen" , 
        description: "As AI becomes more pervasive in our lives, it's important to consider the ethical implications of its use. This post explores the challenges and opportunities of responsible AI, including bias, privacy, and accountability."
    },
 ])

 
   
    const [activeId,setactiveId]=useState(null)
    const [count,setCount]=useState(5)
   
    

const deleteCard =(id)=>{
    const newCardData={...cardData};
    delete newCardData[id];

    setCardData(newCardData);
}
    

    const Value={
        cardData,
        setCardData,
        activeId,
        setactiveId,
        count,
        setCount,
        deleteCard
       
        }

    return <AppContext.Provider value={Value}>
        {children}
        </AppContext.Provider>
}
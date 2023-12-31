import React, { createContext, useState } from "react";
const stateContext = createContext(
    { 
        user: null,
        token:null,
        setToken:()=>{},
        setUser:()=>{}
    });
function ContextProvider({children}) {
    const [user, setUser] = useState()
   
    // const [token,_setToken]=useState(localStorage.getItem("ACCESS_TOKEN"))
    const [token,_setToken]=useState(12345)

    const setToken=(token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem("ACCESS_TOKEN",token)
        }
        else{
            localStorage.removeItem("ACCESS_TOKEN")
        }

    }
  return <stateContext.Provider value={{user,token,setToken,setUser}}>
    {children}
  </stateContext.Provider>
  
}

export default ContextProvider;
export {stateContext};
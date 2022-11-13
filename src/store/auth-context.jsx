import React,{useState} from 'react'

const AuthContext = React.createContext({

    token: '',
    isLoggedIn: false,
    login : (token) => {},
    logout: () => {},

})



export const AuthContextProvider = (props) => {

  const [token,setToken] = useState(localStorage.getItem('token'));
  
  const userIsLoggiedIn = !!token;

  const   logoutHandler = () => {
    setToken(null)
    localStorage.removeItem("token")
   }


  const loginHandler = (token,) =>{
    setToken(token)
    localStorage.setItem("token", token)

    // login out when jwt token expires 
    setTimeout(logoutHandler, 1800000)
    // setTimeout(logoutHandler, 5000)

  }

  const contextValue ={
    token  : token,
    isLoggedIn : userIsLoggiedIn,
    login : loginHandler,
    logout : logoutHandler
  }

  return (
   <AuthContext.Provider value={contextValue}>
    {props.children}
   </AuthContext.Provider>
  )
}


export default AuthContext
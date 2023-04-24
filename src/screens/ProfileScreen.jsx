import React, {useRef,useState,useEffect,useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/auth-context';


const ProfileScreen = () => {


const [fullname,setFullname] = useState("Username")
const [email,setEmail] = useState("User email")
const [phone,setPhone] = useState("User Phone")


const authContext = useContext(AuthContext)    
const authToken = authContext.token


const config = {
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${authToken}`,
    },
};    


useEffect( () => {
    async function fetchData() {
        try{
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/profile`, config)
            console.log(response)

            setFullname(response.data.name);
            setPhone(response.data.phone);
            setEmail(response.data.email);
        }
        catch(error){
            console.log(error);
        }}
    
        fetchData()
    },[])   

  




  return (
   
       
    <section className="position-relative py-4 py-xl-5">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Profile</h2>
                    <p className="w-lg-50"></p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-5">
                        <div className="card-body d-flex flex-column align-items-center">
                            <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                </svg></div>
                         
                                <div className="mb-3"  name="fullname">{fullname}</div>
                                <div className="mb-3"  name="email" >{email}</div>
                                <div className="mb-3"  name="phoneno">{phone}</div>

                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

  )
}

export default ProfileScreen
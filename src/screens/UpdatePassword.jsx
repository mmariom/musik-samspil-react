import React,{useRef,useState,useEffect,useContext} from 'react'
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom'

import axios from 'axios'


const UpdatePassword = () => {

    const { email, token} = useParams()
  
    const passwordInputRef = useRef();
    const navigate = useNavigate()

    
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
        
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("button clicked")
        const enteredPassword = passwordInputRef.current.value;    
      
        axios.post(`/api/user/reset/${email}/${token}`, {
            password: enteredPassword
        }).then(function (response) {
            
            setSuccess(true)
            //clear form 
            e.target.reset();

            setTimeout(function() {
                navigate("/login");
              }, 4500);          
            })
            .catch(function (error) {
                console.log(error.response.data)
                setErrorMessage(error.response.data.message)
         });
      
    
    }
  
    return (

    <section className="position-relative py-4 py-xl-5">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Sign up or die ....</h2>
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


                                {/* <div class="alert alert-danger" role="alert"><span><strong>Alert</strong> text.</span></div>
                                <div class="alert alert-success" role="alert"><span><strong>Alert</strong> text.</span></div> */}
                                
                                {success ? 
                                <div class="alert alert-success" role="alert"><span>Your password has been reset </span></div>
                                    : ""
                                }
                                {!errorMessage ? "" : <div class="alert alert-danger" role="alert"><span><strong>Error : </strong> 
                                {errorMessage} </span></div>}

                            <form onSubmit={handleSubmit} className="text-center" method="post">
                                <div className="mb-3"><input ref={passwordInputRef}className="form-control" type="password" name="password" placeholder="Password"/></div>
                                <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" id="update-button">Update password</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
  )
}

export default UpdatePassword

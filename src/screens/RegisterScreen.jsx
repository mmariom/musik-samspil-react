import React,{useRef,useState,useEffect,useContext} from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios'


const RegisterScreen = () => {
  
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const nameInputRef = useRef();
    const phoneInputRef = useRef();

    const navigate = useNavigate();

    
    const [registError, setRegistError] = useState(false);
    const [registErrorMessage, setRegistErrorMessage] = useState([]);
    const [registrationSucc, setRegistrationSucc] = useState(false);
        
    
    let arrOfErrors = []
    const handleSubmit = async (e) => {
        e.preventDefault();
        setRegistErrorMessage([])
        setRegistError(false)
        setRegistrationSucc(false)
        console.log("button clicked")
        const enteredEmail = emailInputRef.current.value;
        const enteredPass= passwordInputRef.current.value;
        const enteredName= nameInputRef.current.value;
        const enteredPhone= phoneInputRef.current.value;
    
      
        axios.post('api/user/register', {
            email: enteredEmail,
            password: enteredPass,
            name: enteredName,
            phone: enteredPhone
          }).then(function (response) {
            
            //display message succesfully registrated

            console.log(response);
            setRegistrationSucc(true)
            //clear form 
            e.target.reset();

            // redirect to login screen
            setTimeout(function() {
                    navigate("/login");
                  }, 4500);
          })
          .catch(function (error) {

            //display errror message

            if (!(error.response.data.message)) {
                console.log("Authentication failed!")
               alert("Authentication failed!")
            }
            else{
            //display errror message

                // console.log(error.response.data.message);


            const allErrors = error.response.data.message
           
            for (let error = 0; error < allErrors.length; error++) {
                const errorSingle = allErrors[error];
                arrOfErrors.push(errorSingle)
                
                
    
            }
            
            setRegistError(true)
            setRegistErrorMessage(arrOfErrors)
                
            }
            

          });
      
    
    }
  
    return (

    <section className="position-relative py-4 py-xl-5">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Sign up</h2>
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
                                
                                {registrationSucc ? 
                                <div class="alert alert-success" role="alert"><span><strong>Yea</strong> your acccount has been created ! </span></div>
                                    : ""
                                }
                                {!registError ? "" : <div class="alert alert-danger" role="alert"><span><strong>Error : </strong> {
                                registErrorMessage.map(item => {
                                    return (
                                        <ul>
                                        <li>{item}</li>
                                        </ul>
                                    )
                                })
                                }</span></div> }

                            <form onSubmit={handleSubmit} className="text-center" method="post">
                                <div className="mb-3"><input  ref={nameInputRef} className="form-control" type="text" placeholder="Full Name" name="fullname"/></div>
                                <div className="mb-3"><input ref={emailInputRef}className="form-control" type="email" name="email" placeholder="Email"/></div>
                                <div className="mb-3"><input ref={passwordInputRef} className="form-control" type="password" name="password" placeholder="Password"/></div>
                                <div className="mb-3"><input ref={phoneInputRef} className="form-control" type="text" placeholder="Phone no" name="phoneno"/></div>
                                <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" id="loginregisterbutton">Register</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
  )
}

export default RegisterScreen
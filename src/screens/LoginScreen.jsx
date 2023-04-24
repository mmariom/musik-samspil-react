import React, {useRef,useState,useEffect,useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/auth-context';
import { useNavigate } from "react-router-dom";


const LoginScreen = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authContext = useContext(AuthContext)    
    const navigate = useNavigate();


    const [loginError, setLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("button clicked")
        const enteredEmail = emailInputRef.current.value;
        const enteredPass= passwordInputRef.current.value;

    
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {

            email: enteredEmail,
            password: enteredPass
          }).then(function (response) {
            
            authContext.login(response.data.token)
            navigate("/profile");
            // console.log(response);
            // console.log(response.data.message);
            // console.log(response.data.token);
            // alert(response.data.message)
          })
          .catch(function (error) {
            if(error){
                setLoginError(true)
                setLoginErrorMessage(error.response.data.error)
            }
            // console.log(error.response.data.error);
            // alert(error.response.data.error)
          });
    
    
    }



  return (
    <>
 
        
        <section className="position-relative py-4 py-xl-5">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Log in</h2>
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



                                {!loginError ? "" : <div class="alert alert-danger" role="alert"><span><strong>Error : </strong> {loginErrorMessage}</span></div> }

                            {/* <div class="alert alert-success" role="alert"><span><strong>Alert</strong> text.</span></div> */}
                 

                            



                            <form onSubmit={handleSubmit} className="text-center" method="post">
                                <div className="mb-3"><input className="form-control"
                                 type="email" name="email" placeholder="Email"
                                 ref={emailInputRef}
                                 required
                                 /></div>

                                <div className="mb-3"><input className="form-control"
                                type="password" name="password" placeholder="Password"
                                ref={passwordInputRef}
                                required
                                /></div>


                                <div className="mb-3"><button className="btn btn-primary d-block w-100"
                                 type="submit" id="loginregisterbutton">Login</button></div>
                                <a className="text-muted" href="/reset">Forgot your password?</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



      
    </>
  )
}

export default LoginScreen
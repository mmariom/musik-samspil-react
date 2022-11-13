import React,{useRef,useState,useEffect,useContext} from 'react'
import { useNavigate } from "react-router-dom";
import AuthContext from '../store/auth-context';
import axios from 'axios'




const CreateGroupScreen = () => {

  


const authContext = useContext(AuthContext)    
const authToken = authContext.token

  
    const titleInputRef = useRef();
    const instrumentInputRef = useRef();
    const descriptionInputRef = useRef();
    const locationInputRef = useRef();
    const contactInputRef = useRef();

    const navigate = useNavigate();


    const config = {
        headers: {
         
            "Authorization": `Bearer ${authToken}`,
        },
    };    
    
    const [registError, setRegistError] = useState(false);
    const [registErrorMessage, setRegistErrorMessage] = useState([]);
    const [registrationSucc, setRegistrationSucc] = useState(false);
        
    
    let arrOfErrors = []
    const handleSubmit = async (e) => {

        e.preventDefault();
        setRegistErrorMessage([])
        setRegistError(false)
        setRegistrationSucc(false)
        // console.log("button clicked")
        // console.log(authToken)
        const enteredTitle = titleInputRef.current.value;
        const enteredInstrument= instrumentInputRef.current.value;
        const enteredDescription= descriptionInputRef.current.value;
        const enteredLocation= locationInputRef.current.value;
        const enteredContact= contactInputRef.current.value;
    
      
        axios.post('http://localhost:3030/group/create', {
            title: enteredTitle,
            instrument: enteredInstrument,
            description: enteredDescription,
            location: enteredLocation,
            contact: enteredContact
          },config).then(function (response) {
            
            //display message succesfully registrated

            console.log(response);
            setRegistrationSucc(true)

            //clear form 
            e.target.reset();


          })
          .catch(function (error) {


            //display errror message
            const allErrors = error.response.data.message
           
            for (let error = 0; error < allErrors.length; error++) {
                const errorSingle = allErrors[error];
                arrOfErrors.push(errorSingle)
   
            }
            
            setRegistError(true)
            setRegistErrorMessage(arrOfErrors)

          });
      
    
    }
  
    return (

    <section className="position-relative py-4 py-xl-5">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Create the Group</h2>
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
                                <div class="alert alert-success" role="alert"><span><strong>Yea</strong> group has been created !</span></div>
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
                                <div className="mb-3"><input  ref={titleInputRef} className="form-control" type="text" placeholder="Title" name="title"/></div>
                                <div className="mb-3"><input  ref={instrumentInputRef} className="form-control" type="text" placeholder="Instrument" name="instrument"/></div>
                                <div className="mb-3"><textarea ref={descriptionInputRef} className="form-control" type="text" placeholder="Description" name="description"/></div>
                                <div className="mb-3"><input  ref={locationInputRef} className="form-control" type="text" placeholder="Location" name="location"/></div>
                                <div className="mb-3"><input  ref={contactInputRef} className="form-control" type="text" placeholder="Contact" name="contact"/></div>

            
                                <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" id="loginregisterbutton">Create Group</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
  )
}

export default CreateGroupScreen
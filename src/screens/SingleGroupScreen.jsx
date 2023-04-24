import React, {useState,useEffect,useContext} from 'react'
import{useParams} from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../store/auth-context';



const SingleGroup = () => {

    const params =  useParams();
    console.log( "params id "+ params.id);



    const authContext = useContext(AuthContext)    
    const authToken = authContext.token

    const config = {
        headers: {
         
            "Authorization": `Bearer ${authToken}`,
        },
    }; 

const [title,setTitle] = useState("Title")
const [instrument,setInstrument] = useState("Instrument")
const [username,setUsername] = useState("User Name")
const [description,setDescription] = useState("Description")
const [location,setLocation] = useState("location")
const [contact,setContact] = useState("Contact ")
const [createdAt,setCreatedAt] = useState()
const [assignedPeople,setAssignedPeople] = useState()

   

useEffect( () => {
    async function fetchData() {
        try{
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/group/${params.id}`)
            console.log(response)

            setTitle(response.data.title);
            setContact(response.data.contact)
            setDescription(response.data.description)
            setInstrument(response.data.instrument)
            setUsername(response.data.userName)
            setLocation(response.data.location)
            let arrayOfNames = []
            let pole = response.data.assignedUsers
            
            // console.log("pole pod tymto");
            // console.log(pole)



            // finding names from json object
            for (let index = 0; index < pole.length; index++) {
                const element = pole[index];
                arrayOfNames.push(element.name)
            }
            setAssignedPeople(arrayOfNames)



            // Edit date ................
            let fetchedDate = response.data.createdAt

            var modifiydate = new Date(fetchedDate);
            var dd = String(modifiydate.getDate()).padStart(2, '0');
            var mm = String(modifiydate.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = modifiydate.getFullYear();
            modifiydate = dd + '/' + mm + '/' + yyyy;

            setCreatedAt(modifiydate)

        }
        catch(error){
            console.log(error);
        }}
    
        fetchData()
    },[])   



const  addToGroupHandler = async ()  => {
    console.log("addToGroupHandler  param group id passeds" + params.id + "config id "  + authToken);

    
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/assignUserToGroup/${params.id}`,config)
    console.log("on addbuttonclick" + response);
    window.location.reload();


}

  




  return (
   
       
    <section className="position-relative py-4 py-xl-5">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Information about group</h2>
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
                         
                                <div className="mb-3"  name="title" >{title}</div>
                                <div className="mb-3"  name="userName" >{username}</div>
                                <div className="mb-3"  name="instrument">{instrument}</div>
                                <div className="mb-3"  name="description">{description}</div>
                                <div className="mb-3"  name="location" >{location}</div>
                                <div className="mb-3"  name="contact">{contact}</div>
                                <div className="mb-3"  name="contact">{createdAt}</div>
                                <div className="mb-3"  name="people">{createdAt}</div>
                                <div className="mb-3"  name="people">{assignedPeople}</div>

                                <button onClick={addToGroupHandler}>Join the group</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

  )
}

export default SingleGroup
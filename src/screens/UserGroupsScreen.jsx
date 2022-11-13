import React,{useRef,useState,useEffect,useContext} from 'react'
import { useNavigate } from "react-router-dom";
import AuthContext from '../store/auth-context';
import axios from 'axios'
import CardUser from '../components/CardUser';
import {Link} from 'react-router-dom';



const UserGroupScreen = () => {

  


const authContext = useContext(AuthContext)    
const authToken = authContext.token

const [fetchData , setFetchData]= useState([])


    const config = {
        headers: {
         
            "Authorization": `Bearer ${authToken}`,
        },
    };    
    

    useEffect( () => {
        async function fetchData() {
            try{
                const response = await axios.get(`http://localhost:3030/group/findusergroups`, config)
                console.log(response.data)
                setFetchData(response.data)
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
                    <h2>My groups</h2>
                    <p className="w-lg-50"></p>
                </div>
            </div>

        </div>

        <div className="container py-4 py-xl-5" id="feature_cards_container">
        {/* <div className="row mb-5">
            <div className="col-md-8 col-xl-3 offset-xl-1 text-center d-xl-flex mx-auto justify-content-xl-center align-items-xl-center">
                <h2 id="features_card_img">Heading</h2>
            </div>
            <div className="col-xl-2 offset-xl-5"></div>
            <div className="col d-xl-flex justify-content-xl-center align-items-xl-center">
                <p id="feature_card_semore" className="w-lg-50">Se alle opslag</p>
            </div>
        </div> */}


<div className="d-flex justify-content-between align-items-center align-content-center mb-4">
    <h2 id="features_card_img">My groups </h2>
    <p className="w-lg-50" id="feature_card_semore" >See all groups</p>
</div>
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
      
    
       {(fetchData.length === 0) 
       
       ?  <h3> Sorry but you dont have groups :( </h3>
       
       :fetchData.map(item =>{
        // console.log(item.value.name)
        return(
            
            // <Link to={'http://localhost:3030/group/'+ item._id }>
    
            <CardUser value={item}/>
       
     
        )
     
       })}
          


    </div>
    </div>
    </section>
    
    
  )
}

export default UserGroupScreen
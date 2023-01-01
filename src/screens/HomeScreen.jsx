
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CardHomepage from '../components/CardHomepage'




const HomeScreen = () => {

const [fetchData , setFetchData]= useState([])
    
    useEffect( () => {
        async function fetchData() {
            try{
                const response = await axios.get(`api/group/all`)
                // console.log(response.data)
                setFetchData(response.data)
            }
            catch(error){
                // console.log(error);
            }}
        
            fetchData()
        },[])   





  return (
    
    <>
        <main className="d-flex justify-content-xl-center align-items-xl-center" id="heroid">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xl-6 offset-xl-0 d-xl-flex justify-content-xl-center">
                    <div className="d-flex flex-column justify-content-center">
                        <h1 id="hero-title">Stedet hvor amatørmusikere finder hinanden og spiller musik sammen</h1>
                        <div className="d-flex justify-content-evenly">
                            <div className="dropdown"><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" id="hero-dropdown" type="button">Vælg instrument</button>
                                <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                            </div><button className="btn btn-primary" id="hero-button" type="button">Se opslag</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6"><img id="hero-image" src={require('../images/clip-333@3x.png')} /></div>
               
            </div>
        </div>
    </main>
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


<div className="d-flex justify-content-between align-items-center align-content-center">
    <h2 id="features_card_img">Seneste opslag</h2>
    <p className="w-lg-50" id="feature_card_semore" >Se alle opslag</p>
</div>
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
      
    
      {(fetchData.length === 0) 
      
      ?  <h3> Sorry but you dont have groups :( </h3>
      
      :fetchData.map(item =>{
       return(
           <CardHomepage value={item} />
       )
    
      })}
         


   </div>



    </div>
    </>
  )
}

export default HomeScreen
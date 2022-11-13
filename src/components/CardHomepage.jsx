import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
const CardHomepage = (props) => {

  // console.log(props);
  return (
   
 
      <div className="col">
          
          <div className="card">
          <Link to={'group/'+ props.value._id }>
              <div className="card-body p-4">
                  <h4 className="card-title">{props.value.title}</h4>
                  <p className="card-text">{props.value.userName}</p>
                  <p className="card-text">{props.value.instrument}</p>
                  <p className="card-text">{props.value.createdAt}</p>
                  <p className="card-text">{props.value._id}</p>
              </div>
              </Link>

          </div>
      </div>
     
 
  )
}

export default CardHomepage
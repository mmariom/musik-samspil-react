import React from 'react'

const CardUser = (props) => {

  console.log(props);
  return (
    <>
    <div className="col">
        <div className="card">
            <div className="card-body p-4">
                <h4 className="card-title">{props.value.title}</h4>
                <p className="card-text">{props.value.userName}</p>
                <p className="card-text">{props.value.instrument}</p>
                <p className="card-text">{props.value.createdAt}</p>
            </div>
            <button>Edit ( add later ) </button>
        </div>
    </div>
    </>
  )
}

export default CardUser
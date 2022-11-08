import React from 'react'
import {Link} from 'react-router-dom';



const Header = () => {
  return (
    <div className="navbar navbar-light navbar-expand-md sticky-top py-3" id="navbarId" testid="">
    <div className="container-fluid">
        <div className="col-xxl-3 offset-xxl-0" id="logoColumnd">
            <div className="navbar-brand d-flex flex-column" >
            <Link to="/">
                <span id="musiksamspil-logo">Musik Samspil</span>
                </Link>
                <span id="subLogo">Skabt af DAOS - Dansk Amatørorkester Samvirke</span></div></div><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="col" id="header-col1">
            <div className="collapse navbar-collapse" id="navcol-2">
                <ul className="navbar-nav d-xxl-flex ms-auto align-items-xxl-center">
                    <li className="nav-item d-xxl-flex align-items-xxl-center"><a className="nav-link active d-xxl-flex justify-content-xxl-center align-items-xxl-center" id="opslag-button" href="#">Opslag</a></li>
                    <li className="nav-item d-xxl-flex align-items-xxl-center"> <Link to="/profile" className="nav-link" id="profil-button"> Profil</Link></li>
                    <li className="nav-item"><Link to="/signup"><button className="btn btn-primary" id="opret-button" type="button">Opret bruger</button></Link></li>
                    <li className="nav-item"><Link to="/login"><button className="btn btn-primary" id="login-button" type="button">Log ind</button></Link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header
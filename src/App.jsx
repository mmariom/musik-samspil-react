import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PageNotFound from "./screens/PageNotFound";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AuthContext from './store/auth-context';
import CreateGroupScreen from './screens/CreateGroupScreen';
import UserGroupScreen from './screens/UserGroupsScreen';
import SingleGroup from './screens/SingleGroupScreen';




function App() {

const authContext = useContext(AuthContext)

  return (
    <>
        <Router>  
          <Header/>
            <Routes>

                  <Route path='/' element={<HomeScreen/>} exact />
                  <Route path='/login' element={<LoginScreen/>}  />
                  <Route path='/signup' element={<RegisterScreen/>}  />
                  <Route path='/group/:id' element={<SingleGroup/>}  />


        


                    {/* Protected routes / needs to be logged  in   */}
                  {<Route path='/profile' element=
                  {!!authContext.isLoggedIn ? <ProfileScreen /> : <Navigate to='/login' />}
                    />}
               
                  {<Route path='/creategroup' element=
                  {!!authContext.isLoggedIn ? <CreateGroupScreen /> : <Navigate to='/login' />}
                    />}

                  {<Route path='/mygroups' element=
                  {!!authContext.isLoggedIn ? <UserGroupScreen /> : <Navigate to='/login' />}
                    />}


                  <Route path='/*' element={<PageNotFound/>}  />

                  
            </Routes>
        <Footer/>
      </Router>
    </>

    
  );
}

export default App;

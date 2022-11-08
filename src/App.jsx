
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




function App() {
  return (
    <>
        <Router>  
      <Header />

            <Routes>

                  <Route path='/' element={<HomeScreen/>} exact />
                  <Route path='/login' element={<LoginScreen/>}  />
                  <Route path='/signup' element={<RegisterScreen/>}  />
                  <Route path='/profile' element={<ProfileScreen/>}  />
                  <Route path='/*' element={<PageNotFound/>}  />

                  
            </Routes>
      <Footer />
      </Router>
    </>

    
  );
}

export default App;

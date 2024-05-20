import Footer from "./components/footer";
import IntroductionPage from "./pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import AdminPriv from "./pages/AdminPages/AdminLogin";
import UsersList from "./pages/AdminPages/AdminUserCredentialList";




function App() {
  return (

    
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/Home' element={<HomePage/>} />
        <Route exact path='/About' element={<AboutPage/>} />
        <Route exact path='/docx' element={<AboutPage/>} />
        <Route exact path='/contact' element={<HomePage/>} />

        <Route exact path='/Login' element={<IntroductionPage/>} />
        <Route exact path='/Signup' element={<CreateAccount/>} />
          
          
          
          
        <Route exact path='/Login-admin' element={<AdminPriv/>} />
        <Route exact path='/Login-admin/ClientCred' element={<UsersList />} />


      </Routes>
    </Router>
    <div>
      
    </div>
    <br></br>
    <br></br>
    
    <Footer />
    </div>
    
    
  );
}

export default App;

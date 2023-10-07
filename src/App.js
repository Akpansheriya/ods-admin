
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './vets/pages/Authentication/login/Login';
import ForgetPassword from './vets/pages/Authentication/forgetPassword/forgetpass/ForgetPassword';
import Verification from './vets/pages/Authentication/forgetPassword/verification/Verification';
import UpdatePassword from './vets/pages/Authentication/forgetPassword/updatePassword/UpdatePassword';
import Main from './vets/pages/Dashboard/main/Main';
import Dialog from './vets/pages/Dashboard/resumen/dialog/Dialog';







function App() {
  
  return (
    <div className="App">
   <Routes>
   <Route exact path='/dialog' element={<Dialog />} />
    <Route exact path='/' element={<Login/>} />
    <Route  path='/forget' element={<ForgetPassword/>} />
    <Route exact path='/verification' element={<Verification/>} />
    <Route  path='/updatePassword' element={<UpdatePassword/>} />
    <Route  path='/dashboard/*' element={<Main/>} />
   
   </Routes>
    </div>
  );
}

export default App;

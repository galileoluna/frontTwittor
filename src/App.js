import React,{useState} from 'react';


import {Button,Alert} from "react-bootstrap";


import SignInSingUp from './page/SignInSingUp';
import {ToastContainer} from "react-toastify";


export default function App() {
const [user, setUser] = useState({name:"gali"});

return(
  <div>
      {user ? (
        <div>
          <SignInSingUp />
        </div>
      ):(<h1>No estas logueado</h1>)}
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
      />
  </div>
)

}



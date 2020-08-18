import React,{useState} from 'react';


import {Button,Alert} from "react-bootstrap";


import SignInSingUp from './page/SignInSingUp';

export default function App() {
const [user, setUser] = useState({name:"gali"});

return(
  <div>
      {user ? (
        <div>
          <SignInSingUp />
        </div>
      ):(<h1>No estas logueado</h1>)}
  </div>
)

}



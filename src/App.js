import React,{useState} from 'react';


import {Button,Alert} from "react-bootstrap";

export default function App() {
const [user, setUser] = useState();

return(
  <div>
      {user ? (<h1>Estas Logueado</h1>):(<h1>No estas logueado</h1>)}
  </div>
)

}



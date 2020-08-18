import {API_HOST} from "../utils/constant";
import { result } from "lodash";

export function signUpApi(user){
    



    const url =`${API_HOST}/registro`;

    const userTemp = {
        ...user,
        email: user.email.toLowerCase(),
        fechaNacimiento: new Date()
    };

    delete userTemp.repeatPassword;

   const params = {
       method: "POST",
       headers:{
           "Content-Type": "application/json"
       },
       body: JSON.stringify(userTemp)
   };

   return fetch(url,params).then(response =>{
       if(response.status >= 200 && response.status < 300){
           return response.json();
       }
       return {code:404, menssage: "Email no disponible" }
   }).then(result =>{
       return result;
   }).catch(err =>{
       return err;
   });
}

export function signInApi(user){
    const url =`${API_HOST}/login`;

    const data = {
        ...user,
        email: user.email.toLowerCase(),
    };

    const params = {
        method: "POST",
        headers:{
            "Content-Type":"aplication/json"
        },
        body: JSON.stringify(data)
    };
    return fetch(url,params).then(response =>{
        if(response.status >= 200 && response.status < 300){
            return response.json()
        }
        return {menssage: "Usuario o contraseña incorrectos" }
    }).then(result =>{
        return result;
    }).catch(err=>{
        return err;
    })
}
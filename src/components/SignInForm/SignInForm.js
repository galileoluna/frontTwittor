import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import { signInApi, setTokenApi } from "../../api/auth";
import "./SigninForm.scss";


export default function SignInForm(props) {
    const { setRefreshCheckLogin}=props;
    const [formData, setFormData] = useState(initialFormValue());
    const [signInLoading, setSignInLoading] = useState(false);

    const onSubmit = e =>{
        e.preventDefault();
        

        let validCount =0;
        values(formData).some(value =>{
            value &&validCount++;
            return null;
        });
        if(size(formData)!== validCount){
            toast.warning("completa todos los campos");
        }else{
            if(!isEmailValid(formData.email)){
                toast.warning("email invalido");
            }else {
                setSignInLoading(true);
                toast.success("todo gucci");
                signInApi(formData).then(response=>{
                    if(response.message){
                        toast.warning(response.message);
                    }else{
                        setTokenApi(response.token);
                        setRefreshCheckLogin(true);
                    }
                }).catch(()=>{
                    toast.error("Error del servidor")
                }).finally(()=>{
                    setSignInLoading(false);
                }
                );
            }
        }
    };

    const onChange = e =>{
        setFormData ({...formData,[e.target.name]:e.target.value});
    }


    return (
     <div className="sign-in-form">
         <h2>Entrar</h2>
         <Form onSubmit={onSubmit} onChange={onChange}>
             <Form.Group>
                 <Form.Control
                 type="email"
                 placeholder="Correo Electronico"
                 defaultValue={formData.email}
                 name="email"
                 />
             </Form.Group>
             <Form.Group>
                 <Form.Control
                 type="password"
                 placeholder="Contraseña"
                 defaultValue={formData.password}
                 name="password"
                 />
             </Form.Group>

             <Button variant ="primary" type="submit">
                 {!signInLoading ?"Iniciar Sesion" : <Spinner animation="border"/>}
                 </Button>
         </Form>
         

     </div>
    )
}
function initialFormValue() {
    return {
      email: "",
      password: ""
    };
  }
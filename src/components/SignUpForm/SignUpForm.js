import React,{useState} from 'react';
import "./SignUpForm.scss";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

export default function SignUpForm(props) {

    const {setShowModal}=props;
    const [formData, setFormData] = useState(initialFormValue());
    const onSubmit = e =>{
        e.preventDefault();
        setShowModal(false);
        console.log(formData);
    }

    const onChange = e =>{
      console.log(e.target.name);
      setFormData({...formData,[e.target.name]:e.target.value});
    }
    return (
        <div className="sign-up-form"> 
            <h2>Crea tu cuanta</h2>
            <Form onSubmit={onSubmit} onChange={onChange}>
            <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="nombre"
               value={FormData.nombre}
    
                defaultValue={formData.nombre}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                value={FormData.apellidos}
         
                name="apellidos"
                defaultValue={formData.apellidos}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Correo electronico"   
            value={FormData.email}
      
            name="email"
            defaultValue={formData.email}
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                defaultValue={formData.password}
              />
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Repetir contraseña"
                name="repeatPassword"
                defaultValue={formData.repeatPassword}
              />
            </Col>
          </Row>
        </Form.Group>



                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </div>
    )
}
function initialFormValue() {
  return {
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    repeatPassword: ""
  };
}
import React from 'react';
import "./SignUpForm.scss";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

export default function SignUpForm(props) {
    const {setShowModal}=props;
    const onSubmit = e =>{
        e.preventDefault();
        setShowModal(false);
    }
    return (
        <div className="sign-up-form"> 
            <h2>Crea tu cuanta</h2>
            <Form onSubmit={onSubmit}>
            <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="nombre"
               // defaultValue={formData.nombre}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                name="apellidos"
                //defaultValue={formData.apellidos}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Correo electronico"
            name="email"
          //  defaultValue={formData.email}
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
            //    defaultValue={formData.password}
              />
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Repetir contraseña"
                name="repeatPassword"
              //  defaultValue={formData.repeatPassword}
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

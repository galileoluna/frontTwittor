import React from 'react';

import { Container, Row ,Col, Button} from "react-bootstrap";

import LogoWhiteTwittor from "../../assets/png/logo-white.png";
import LogoTwittor from "../../assets/png/logo.png";

import "./SignInSingUp.scss";
export default function SignInSingUp() {
    return (
        //Fluid es para que ocupe toda la pagina
      <Container className="signin-signup" fluid>
          <Row>
            <LeftComponent/>
            <RightComponent/>
          </Row>
      </Container>
    )
}

function LeftComponent(){
    return (

        <Col className="signin-signup__left" xs={6}>
          <img src={LogoTwittor} alt="Twittor" />
          <div>

              <h2>
                  -Sigue lo que te interesa
              </h2>

              <h2>
                  -Enterate de que esta pasando
              </h2>
              
              <h2>
                  -Unete 
              </h2>
          </div>
        </Col>
    )


}


function RightComponent(){
    return (

        <Col className="signin-signup__right" xs={6}>
            <h2>
                RightComponent...
            </h2>
        </Col>
    )


}

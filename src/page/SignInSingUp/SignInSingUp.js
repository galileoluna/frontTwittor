import React from 'react';

import { Container, Row ,Col, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUsers, faComment} from "@fortawesome/free-solid-svg-icons";

import LogoWhiteTwittor from "../../assets/png/logo-white.png";
import LogoTwittor from "../../assets/png/logo.png";

import "./SignInSingUp.scss";
import "../../index.scss";
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
            <FontAwesomeIcon icon={faSearch} />
                  Sigue lo que te interesa
              </h2>

              <h2>
              <FontAwesomeIcon icon={faComment} />
                  Enterate de que esta pasando
              </h2>
              
              <h2>
              <FontAwesomeIcon icon={faUsers} />
                  Unete 
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

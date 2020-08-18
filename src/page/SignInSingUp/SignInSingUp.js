import React, {useState} from 'react';

import { Container, Row ,Col, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUsers, faComment} from "@fortawesome/free-solid-svg-icons";

import LogoWhiteTwittor from "../../assets/png/logo-white.png";
import LogoTwittor from "../../assets/png/logo.png";

import "./SignInSingUp.scss";
import "../../index.scss";


import BasicModal from './../../components/Modal/BasicModal/BasicModal';

export default function SignInSingUp() {
    const [showModal, setShowModal] = useState(true);
    const [contentModal, setContentModal] = useState(null);

    return (
        //Fluid es para que ocupe toda la pagina
    <>
      <Container className="signin-signup" fluid>
          <Row>
            <LeftComponent/>
            <RightComponent/>
          </Row>
      </Container>
      <BasicModal show ={showModal}setShowModal={setShowModal}>
      <div>
          <h2>Modal COntent</h2>
      </div>
      </BasicModal>

    </>
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
            <div>
                <img src={LogoWhiteTwittor} alt="Twittor" />
                <h2>Mira lo que esta pasando</h2>
                <h3>Unete</h3>

                <Button variant ="primary">Registrate</Button>
                <Button variant ="outline-primary">Iniciar</Button>

            </div>
        </Col>
    )


}

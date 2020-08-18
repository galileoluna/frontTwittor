import React, {useState} from 'react';

import { Container, Row ,Col, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUsers, faComment} from "@fortawesome/free-solid-svg-icons";

import LogoWhiteTwittor from "../../assets/png/logo-white.png";
import LogoTwittor from "../../assets/png/logo.png";

import "./SignInSingUp.scss";
import "../../index.scss";


import BasicModal from './../../components/Modal/BasicModal/BasicModal';

import SignUpForm from './../../components/SignUpForm/SignUpForm';


import SignInForm from './../../components/SignInForm/SignInForm';


export default function SignInSingUp() {
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content =>{
        setShowModal(true);
        setContentModal(content);
    }

    return (
        //Fluid es para que ocupe toda la pagina
    <>
      <Container className="signin-signup" fluid>
          <Row>
            <LeftComponent/>
            <RightComponent openModal={openModal} setShowModal={setShowModal}/>
          </Row>
      </Container>
      <BasicModal show ={showModal}setShowModal={setShowModal}>
            {contentModal}
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


function RightComponent(props){
    const {openModal,setShowModal} = props;
    return (

        <Col className="signin-signup__right" xs={6}>
            <div>
                <img src={LogoWhiteTwittor} alt="Twittor" />
                <h2>Mira lo que esta pasando</h2>
                <h3>Unete</h3>

                <Button
                 variant ="primary"
                 onClick={()=> openModal(<SignUpForm setShowModal={setShowModal}/>)}
                 >Registrate</Button>
                <Button 
                variant ="outline-primary"
                onClick={()=> openModal(<SignInForm setShowModal={setShowModal}/>)}
                >Iniciar</Button>

            </div>
        </Col>
    )


}

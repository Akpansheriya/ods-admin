import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "../../scss/main.scss";
import { useNavigate } from "react-router-dom";
import Alert from "../../../../components/alert/Alert";

function Verification() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
 
  const handleHide = () => {
    setModalShow(false);
    navigate("/updatePassword");
  };
  return (
    <div>
      <div className="main-auth-container">
    <div className="background" >
      <img src="../images/login.png" alt="held" />
    </div>
    <div className="d-flex flex-column flex-root" id="kt_app_root">
     

      <div className="d-flex flex-column flex-column-fluid flex-lg-row">
        <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
          <div className="d-flex flex-center flex-lg-start flex-column main-section-auth">
          <div className='left-container'>
<div className='left-inner-container'>
    <p className='main-heading'>Veterinaria <sup>ODS</sup></p>
    <p className='sub-heading'>Inicia sesión para entrar a tu cuenta</p>
</div>
    </div>
          </div>
        </div>

        <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
          <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20 main-section-auth">
          <div className='right-container'>
       <div className='right-inner-container'>
         <div className='d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20'>
         <div className="form-title">
                    <p>
                      {" "}
                      Enviamos un enlace a <br />
                      tu correo
                    </p>
                  </div>
                  <p className="forget-sub-title">
                    Te hemos enviado un enlace para restablecer la contraseña a
                    tu correo electrónico.
                  </p>
                  <p className="forget-sub-title">
                    No olvides de revisar tu carpeta de Correos no deseados o
                    Spam.
                  </p>

                  <Button
                    onClick={() => navigate("/")}
                    className="back-login-btn"
                    variant="primary"
                    type="submit"
                  >
                    Volver a Iniciar Sesión
                  </Button>

                  <Button onClick={() => setModalShow(true)}
                  
                    className='verification-link-btn' variant="primary"
                    type="submit"> Renviar
                  </Button>

                  <p className="time-counter">
                    Podrás reenviarlo en 60 segundos.
                  </p>
                  <Alert
                    show={modalShow}
                    onHide={handleHide}
                    msg={"Hemos reenviado el enlace a tu correo"}
                  />
   </div>
   </div>
   </div>

          
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Verification;

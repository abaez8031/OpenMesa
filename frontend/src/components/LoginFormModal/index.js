import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Modal } from "../../context/Modal";

const LoginFormModal = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  
  return (
    <>
      <button onClick={() => setShowLoginModal(true)}>Log In</button>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );

}

export default LoginFormModal;
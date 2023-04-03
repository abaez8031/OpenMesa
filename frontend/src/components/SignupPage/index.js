import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm"

const SignupFormModal = () => {
  const [showSignupModal, setShowSignupModal] = useState(false)
  
  return (
    <>
      <button onClick={() => setShowSignupModal(true)}>Signup</button>
      {showSignupModal && (
        <Modal onClose={() => setShowSignupModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
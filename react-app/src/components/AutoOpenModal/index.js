import React, { useEffect } from 'react';
import { useModal } from '../../context/Modal';

function AutoOpenModal({ modalComponent, onModalClose, openOnSuccess }) {
  const { setModalContent, setOnModalClose } = useModal();

  useEffect(() => {
    if (openOnSuccess) {
      // Set the modal content when the component mounts
      setModalContent(modalComponent);

      // Optionally set a callback function to be executed when the modal is closed
      if (onModalClose) {
        setOnModalClose(onModalClose);
      }
    }

    // Clean up by closing the modal when the component unmounts
    return () => {
      setModalContent(null);
      setOnModalClose(null);
    };
  }, [modalComponent, onModalClose, setModalContent, setOnModalClose, openOnSuccess]);

  return null; // This component doesn't render anything directly
}

export default AutoOpenModal;

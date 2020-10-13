import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { closeModal } from './modalReducer';
import { useEffect } from 'react';

export default function ModalWrapper({ children, size, header }) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Modeal Wrapper Render');

    return () => {};
  }, []);

  return (
    <Modal open={true} onClose={() => dispatch(closeModal())} size={size}>
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import React from 'react';
import TaskForm from '../TaskForm/TaskForm';

const TaskModal = ({ children, name, description, priority, _id, state }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{children}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{children} Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TaskForm
              onClose={onClose}
              name={name}
              description={description}
              priority={priority}
              state={state}
              _id={_id}
            >
              {children}
            </TaskForm>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskModal;

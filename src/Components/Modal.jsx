import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { CloseModalAction } from "../Redux/ActionCreators/ModalActionCreator";
import { UpdateTodoAction } from "../Redux/ActionCreators/TodoActionCreator";

function Example(props) {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((Store) => Store.Modal);
  // console.log(isOpen);
  return (
    <div>
      <Modal isOpen={isOpen}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <input type="text"
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => dispatch(UpdateTodoAction())}
          >
            Change Task
          </Button>
          <Button
            color="secondary"
            onClick={() => dispatch(CloseModalAction(false))}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;

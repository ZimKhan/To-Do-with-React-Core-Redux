import React from "react";
import { useDispatch } from "react-redux";
import { DeleteTodoAction } from "../Redux/ActionCreators/TodoActionCreator";
import Modal from "./Modal";
import { useState } from "react";
import { OpenModalAction } from "../Redux/ActionCreators/ModalActionCreator";
const Items = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const [open, setOpen] = useState();
  return (
    <>
      {/* <Modal modal={modal} /> */}
      <div style={{ display: "flex" }}>
        <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
          <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
            <div className="form-check">
              <input
                className="form-check-input me-0"
                type="checkbox"
                value=""
                id="flexCheckChecked1"
                aria-label="..."
                checked
              />
            </div>
          </li>
          <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
            <p className="lead fw-normal mb-0">{props.item}</p>
          </li>
        </ul>
        <div>
          <button
            class="btn btn-success"
            onClick={() => dispatch(OpenModalAction(true))}
          >
            Edit
          </button>
          <button
            class="btn btn-danger"
            onClick={() => dispatch(DeleteTodoAction(props.item))}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Items;

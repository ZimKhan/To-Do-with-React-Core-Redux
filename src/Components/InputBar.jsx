import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { CreateTodoAction } from '../Redux/ActionCreators/TodoActionCreator';
const InputBar = () => {
  const dispatch = useDispatch()
  const [state, setstate] = useState('');
  const addItem = () => {
    console.log(state);
    dispatch(CreateTodoAction(state))
  }
  return (
    <>
      <div className="pb-2">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-row align-items-center">
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Add new..."
                value={state}
                onChange={(event) => setstate(event.target.value)}
              />
              <a href="#!" data-mdb-toggle="tooltip" title="Set due date">
                <i className="fas fa-calendar-alt fa-lg me-3"></i>
              </a>
              <div>
                <button type="button" className="btn btn-primary" onClick={addItem}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputBar
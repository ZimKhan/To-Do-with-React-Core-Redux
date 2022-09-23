import React from "react";
import Header from "./Components/Header";
import InputBar from "./Components/InputBar";
import Items from "./Components/Items";
import { useSelector } from "react-redux";
import Modal from "./Components/Modal";
const App = () => {
  const { todo } = useSelector((store) => store.todos);
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div
                className="card"
                id="list1"
                style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
              >
                <div className="card-body py-4 px-4 px-md-5">
                  {/* Header */}
                  <Header />
                  {/* Input Bar */}

                  <InputBar />

                  {/* <hr className="my-4" /> */}

                  {/* Items */}
                  {todo.length ? (
                    todo.map((item) => <Items item={item} />)
                  ) : (
                    <h2>Empty Add item</h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal />
    </>
  );
};

export default App;

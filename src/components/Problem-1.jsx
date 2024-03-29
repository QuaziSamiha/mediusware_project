import React, { useState } from "react";

const Problem1 = () => {
  const [inputs, setInputs] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [show, setShow] = useState("all");

  const handleClick = (val) => {
    setShow(val);
  };
  //   console.log(show);

  const handleOnBlur = (event) => {
    // console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event.target.value);
    event.preventDefault();
    // console.log(inputs);
    setAllUsers([...allUsers, inputs]);
  };
  //   console.log(allUsers);

  const activeUsers = allUsers.filter((user) => {
    return user.status.toLowerCase() === "active";
  });
  //   console.log(activeUsers);

  const completedUsers = allUsers.filter((user) => {
    return user.status.toLowerCase() === "completed";
  });
  //   console.log(completedUsers);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                // id="name"
                name="userName"
                className="form-control"
                placeholder="Name"
                onBlur={handleOnBlur}
                autoComplete="on"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                // id="status"
                name="status"
                className="form-control"
                placeholder="Status"
                onBlur={handleOnBlur}
                autoComplete="on"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>

          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {show == "active"
              ? activeUsers.map((user, index) => (
                  <thead key={index}>
                    <tr>
                      <th scope="col">{user.userName}</th>
                      <th scope="col">{user.status}</th>
                    </tr>
                  </thead>
                ))
              : show == "completed"
              ? completedUsers.map((user, index) => (
                  <thead key={index}>
                    <tr>
                      <th scope="col">{user.userName}</th>
                      <th scope="col">{user.status}</th>
                    </tr>
                  </thead>
                ))
              : allUsers.map((user, index) => (
                  <thead key={index}>
                    <tr>
                      <th scope="col">{user.userName}</th>
                      <th scope="col">{user.status}</th>
                    </tr>
                  </thead>
                ))}
            {/* {allUsers.map((user, index) => (
              <thead key={index}>
                <tr>
                  <th scope="col">{user.userName}</th>
                  <th scope="col">{user.status}</th>
                </tr>
              </thead>
            ))} */}
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;

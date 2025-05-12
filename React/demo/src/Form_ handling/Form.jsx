import React, { useState } from "react";

function Form() {
  const [fname, setfname] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setlname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form action="">
            <div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  First Name
                </label>
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setfname(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your first name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  value={mname}
                  onChange={(e) => setmname(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your middle name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setlname(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your  last name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  value={number}
                  onChange={(e) => setnumber(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your number"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {" "}
                  Email address{" "}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
                <input type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

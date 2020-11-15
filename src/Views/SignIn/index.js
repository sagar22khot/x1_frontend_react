import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../Components/Layout";
import axios from "axios";
import { authenticate, isAuth } from "../../auth/helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ContentDiv } from "./styled";

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: "sag45@gmail.com",
    password: "goodrum815",
    buttonText: "Submit",
  });

  const { email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, buttonText: "Submitting" });

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/signin`,
      data: { email, password },
    })
      .then((response) => {
        console.log("SIGNIN SUCCESS", response);
        authenticate(response, () => {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            buttonText: "Submitted",
          });
          // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
          isAuth() && isAuth().role === "admin"
            ? history.push("/admin")
            : history.push("/private");
        });
      })
      .catch((error) => {
        console.log("SIGNIN ERROR:", error.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
      });
  };

  const signinForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          value={email}
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
          className="form-control"
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={clickSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <ContentDiv className="col-md-6 col-lg-4 col-sm-8">
        <ToastContainer />
        {/* {JSON.stringify({ name, email, password })} */}
        {isAuth() ? <Redirect to="/" /> : null}
        <h1 className="pb-5 text-center">Signin</h1>
        {signinForm()}
      </ContentDiv>
    </Layout>
  );
};

export default Signin;

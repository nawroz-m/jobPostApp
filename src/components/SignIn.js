import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCALSTORAGECONSTANT } from "../constant/cons";
import SignInRight from "../pages/authPages/SignInRight";
import SignUpLeft from "../pages/authPages/SignUpLeft";
import SignUpRight from "../pages/authPages/SignUpRight";
import { signinUser, signupUser } from "../services/user/user";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const nav = useNavigate();
  const onSubmitHandler = async () => {
    const data = {
      email: email,
      password: password,
      // usertype: user,
    };
    const response = await signinUser(data);
    const responseMessage = response && response.data && response.data.message;
    const responseData = response && response.data && response.data.user;
    if (responseMessage === "success" && responseData !== null) {
      localStorage.setItem(LOCALSTORAGECONSTANT.EMAIL, responseData.email);
      localStorage.setItem(LOCALSTORAGECONSTANT.ROLE, responseData.usertype);
      localStorage.setItem(LOCALSTORAGECONSTANT.USERID, responseData._id);

      if (responseData.usertype === "employee") {
        nav("/job_list");
      }
      nav("/post_job");
    } else {
      setAlert(true);
    }
  };

  setTimeout(() => {
    setAlert(false);
  }, 2000);
  return (
    <div className="signupContainer">
      <SignUpLeft />

      <SignInRight />
    </div>
  );
};

export default SignIn;

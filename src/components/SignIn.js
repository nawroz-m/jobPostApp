import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCALSTORAGECONSTANT } from "../constant/cons";
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
    <div
      style={{
        // display: "inline",
        // justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
      }}
    >
      {alert && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          User not found — <strong>check your credintial!</strong>
        </Alert>
      )}
      <h1>Signin page</h1>

      <div
        style={{
          display: "inline",
        }}
      >
        <div>
          <TextField
            sx={{ width: 300, margin: 2 }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="Enter your email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            sx={{ width: 300, margin: 2 }}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Enter a password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <Button
            sx={{ margin: 2 }}
            variant="contained"
            onClick={onSubmitHandler}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

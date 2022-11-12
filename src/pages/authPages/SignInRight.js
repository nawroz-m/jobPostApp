import {
  Alert,
  AlertTitle,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCALSTORAGECONSTANT } from "../../constant/cons";
import { signinUser } from "../../services/user/user";

import GoogleIcon from "@mui/icons-material/Google";

const SignInRight = () => {
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
        width: "100%",
        textAlign: "start",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      {alert && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          User not found — <strong>check your credintial!</strong>
        </Alert>
      )}
      <div style={{ width: "100%", textAlign: "center" }}>
        <div style={{ display: "block", padding: 10 }}>
          <Button
            className=""
            sx={{ marginRight: 1 }}
            variant="outlined"
            onClick={onSubmitHandler}
          >
            Job Seeker
          </Button>
          <Button
            className=""
            sx={{ marginLeft: 1 }}
            variant="text"
            onClick={onSubmitHandler}
          >
            Company
          </Button>
        </div>
        <div className="boldFontClass">Welcome Back, Dude</div>

        <div>
          <Button
            sx={{ margin: 2, width: 300, textTransform: "none" }}
            variant="outlined"
            onClick={onSubmitHandler}
          >
            <GoogleIcon sx={{ color: "greenyellow" }} />{" "}
            <strong> Login with Google</strong>
          </Button>
          <div class="separator" style={{ paddingLeft: 185 }}>
            Or login with email
          </div>
        </div>

        <div style={{ paddingTop: 8 }}>
          <div className="TextFieldLabel">Email Address</div>
          <TextField
            className="AuthInputTextField"
            sx={{ marginBottom: 2 }}
            id="outlined-basic"
            // label="Email"
            variant="outlined"
            placeholder="Enter your email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="TextFieldLabel">Password</div>
          <TextField
            className="AuthInputTextField"
            sx={{ marginBottom: 2 }}
            type="password"
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter a password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <Button
            className="AuthInputTextField"
            sx={{ margin: 2 }}
            variant="contained"
            onClick={onSubmitHandler}
          >
            Log In
          </Button>
        </div>
      </div>
      <div style={{ paddingLeft: 185 }}>
        Don't have an account?{" "}
        <strong>
          <a className="anchorHrefBotomLine" href="/signup">
            Sign Up
          </a>
        </strong>
      </div>
    </div>
  );
};

export default SignInRight;

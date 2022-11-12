import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../services/user/user";

const SignUpRight = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const nav = useNavigate();
  const onSubmitHandler = async () => {
    const data = {
      email: email,
      password: password,
      usertype: user,
    };
    const response = await signupUser(data);
    const responseMessage = response && response.data && response.data.message;
    if (responseMessage === "success") {
      nav("/signin");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        textAlign: "start",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
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
        <div className="boldFontClass">Get more opportunities</div>

        <div>
          <Button
            sx={{ margin: 2, width: 300, textTransform: "none" }}
            variant="outlined"
            onClick={onSubmitHandler}
          >
            <GoogleIcon sx={{ color: "greenyellow" }} />{" "}
            <strong>Sign Up with Google</strong>
          </Button>
          <div class="separator" style={{ paddingLeft: 185 }}>
            Or sign up with email
          </div>
        </div>

        <div style={{ paddingTop: 8 }}>
          <div className="TextFieldLabel">Full name</div>
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
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">User</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              //   defaultValue="Employee"
              name="radio-buttons-group"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <FormControlLabel
                  value="employer"
                  control={<Radio />}
                  label="Employer"
                />
                <FormControlLabel
                  value="employee"
                  control={<Radio />}
                  label="Employee"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Button
            className="AuthInputTextField"
            sx={{ margin: 2 }}
            variant="contained"
            onClick={onSubmitHandler}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div style={{ paddingLeft: 185 }}>
        Already have an account?{" "}
        <strong>
          <a className="anchorHrefBotomLine" href="/signin">
            Login
          </a>
        </strong>
        <div style={{ paddingTop: 20 }}>
          By clicking 'Continue', you acknowledge that you have read and accept
          the{" "}
          <a className="anchorHrefBotomLine" href="/">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="anchorHrefBotomLine" href="/">
            {" "}
            Privacy Policy{" "}
          </a>{" "}
          .
        </div>
      </div>
    </div>
  );
};

export default SignUpRight;

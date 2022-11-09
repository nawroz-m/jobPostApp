import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { signupUser } from "../services/user/user";

const Signup = () => {
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
        // display: "inline",
        // justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>Signup page</h1>

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
            sx={{ margin: 2 }}
            variant="contained"
            onClick={onSubmitHandler}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { LOCALSTORAGECONSTANT } from "../constant/cons";

import { useNavigate } from "react-router-dom";
import { postNewJob } from "../services/user/user";

const userRole = localStorage.getItem(LOCALSTORAGECONSTANT.ROLE);

const Postajob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobId, setJobId] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("");
  const [level, setLevel] = useState("");

  const [alert, setAlert] = useState(false);
  const nav = useNavigate();

  const onSubmitJobPost = async () => {
    const data = {
      job_title: jobTitle,
      job_id: jobId,
      location: location,
      mode: mode,
      level: level,
    };

    const response = await postNewJob(data);
    const responseData = response && response.data && response.data;

    if (responseData.message === "success") {
      //   setJobId("");
      //   setJobTitle("");
      setAlert(true);
    }
  };

  const checkUserRole = (role) => {
    if (role !== "employer") {
      nav("/");
    }
  };

  useEffect(() => {
    checkUserRole(userRole);
  }, []);

  setTimeout(() => {
    setAlert(false);
  }, 2000);
  return (
    <>
      <div
        style={{
          // display: "inline",
          // justifyContent: "center",
          // alignItems: "center",
          textAlign: "center",
        }}
      >
        {alert && (
          <Alert severity="success">
            <AlertTitle>success</AlertTitle>
            <strong>Job posted success fully</strong>
          </Alert>
        )}
        <h1>Post a job here</h1>

        <div
          style={{
            display: "inline",
          }}
        >
          <div>
            <TextField
              sx={{ width: 300, margin: 2 }}
              id="outlined-basic"
              label="Job title"
              variant="outlined"
              placeholder="Enter the job title"
              onChange={(e) => {
                setJobTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              sx={{ width: 300, margin: 2 }}
              id="outlined-basic"
              label="Job Id"
              variant="outlined"
              placeholder="Enter the job id"
              onChange={(e) => {
                setJobId(e.target.value);
              }}
            />
          </div>

          <div>
            <TextField
              sx={{ width: 300, margin: 2 }}
              id="outlined-basic"
              label="Location"
              variant="outlined"
              placeholder="Enter the job location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              sx={{ width: 300, margin: 2 }}
              id="outlined-basic"
              label="Mode"
              variant="outlined"
              placeholder="On-site, Remote, Hybred"
              onChange={(e) => {
                setMode(e.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              sx={{ width: 300, margin: 2 }}
              id="outlined-basic"
              label="Level"
              variant="outlined"
              placeholder="Intern, junior, senior"
              onChange={(e) => {
                setLevel(e.target.value);
              }}
            />
          </div>

          <div>
            <Button
              sx={{ margin: 2 }}
              variant="contained"
              onClick={onSubmitJobPost}
            >
              Post job
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postajob;

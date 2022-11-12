import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LOCALSTORAGECONSTANT } from "../constant/cons";
import { applyJob, getJobById } from "../services/user/user";

const JobDetails = () => {
  const [alert, setAlert] = useState(false);
  const [jobs, setJobs] = useState(null);

  const { id } = useParams();
  const nav = useNavigate();

  const fetchJobs = async (user_id) => {
    const response = await getJobById(user_id);
    const jobsResponse = response && response.data && response.data.jobs;
    if (!jobsResponse || jobsResponse === undefined) {
      setJobs(null);
      setAlert(true);
    } else {
      setJobs(jobsResponse);
    }
  };

  useEffect(() => {
    fetchJobs(id);
  }, []);
  //   const job = props.job;

  const handleRegisterJob = async (value) => {
    const userRole = localStorage.getItem(LOCALSTORAGECONSTANT.ROLE);
    if (userRole === "employee") {
      const response = await applyJob(value);
      const responseData = response && response.data;
      if (responseData.message === "success") {
        // props.onApplySubmitJob();
      }
    } else {
      setAlert(true);
    }
  };

  const cancelHandler = async () => {
    nav("/job_list");
  };
  return (
    <>
      {alert && jobs && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Only employee can apply this job!
        </Alert>
      )}

      {jobs ? (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 24 }}
              color="text.secondary"
              gutterBottom
            >
              {jobs && jobs.job_title}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Job id: {jobs && jobs.job_id}
              <div
                style={{
                  display: "flex",
                }}
              >
                <div style={{ margin: 10 }}>Level: {jobs && jobs.level}</div>
                <div style={{ margin: 10 }}>
                  Location: {jobs && jobs.location}
                </div>
                <div style={{ margin: 10 }}>Mode: {jobs && jobs.mode}</div>
              </div>
            </Typography>
            <Typography variant="body2">
              Descriptions: well meaning and kindly.
              <br />
              {'"a benevolent small"'}
            </Typography>
            <Button
              style={{ float: "right" }}
              variant="contained"
              onClick={() => {
                handleRegisterJob(jobs);
              }}
            >
              Register Now
            </Button>
            <Button
              style={{ float: "left" }}
              // variant="contained"
              onClick={() => {
                cancelHandler();
              }}
            >
              cancel
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Not found any job!
        </Alert>
      )}
    </>
  );
};

export default JobDetails;

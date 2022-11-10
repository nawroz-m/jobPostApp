import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJobs } from "../services/user/user";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  const nav = useNavigate();
  const fetchAllJobs = async () => {
    const response = await getAllJobs();
    const responseData = response && response.data && response.data.jobs;

    if (responseData) {
      setJobs(responseData);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const handleLearnMore = (JobId) => {
    nav(`/job_detail/${JobId}`);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Job list page</h1>
        {jobs &&
          jobs.map((job, idx) => {
            return (
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 24 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {job.job_title}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Level: {job.level}
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent small"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      handleLearnMore(job.job_id);
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default JobList;

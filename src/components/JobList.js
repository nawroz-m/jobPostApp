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
import Header from "../pages/Common/Header";
import SearchJobInputs from "../pages/Common/SearchJobInputs";
import FindJobsSideBar from "../pages/Jobs/FindJobsSideBar";
import JobsListBar from "../pages/Jobs/JobsListBar";
import { getAllJobs } from "../services/user/user";

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
        <Header />

        <div className="FindPlaceLand">
          <div className="DiscoverDivClass">
            {" "}
            <strong>Find your dreamjob </strong>
          </div>
          <div className="PopularText">
            Find your next career at companies like HubSpot, Nike, and Dropbox
          </div>
          <SearchJobInputs />
          <div style={{ display: "flex" }}>
            <div className="PopularText">
              Popular : UI Designer, UX Researcher, Android, Admin
            </div>
          </div>
        </div>
        {/* {jobs &&
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
          })} */}
      </div>

      <div style={{ display: "flex", padding: 70 }}>
        <FindJobsSideBar />

        <JobsListBar jobs={jobs} />
      </div>
    </>
  );
};

export default JobList;

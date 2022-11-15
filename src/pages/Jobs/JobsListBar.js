import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import PausePresentationIcon from "@mui/icons-material/PausePresentation";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import { Button, Divider } from "@mui/material";
import ProgressLinear from "../../components/ProgressLinear";
import { useNavigate } from "react-router-dom";

const JobsListBar = ({ jobs }) => {
  const nav = useNavigate();

  const handleLearnMore = (JobId) => {
    nav(`/job_detail/${JobId}`);
  };

  console.log({ jobs });
  return (
    <>
      <div style={{ width: "100%", display: "block" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div>
            <div style={{ fontSize: 50 }}>
              {" "}
              <strong>All Jobs</strong>
            </div>
            <div>Showing /3 results</div>
          </div>
          <div
            style={{
              width: "25%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              Sort by: Most ralevan <ExpandMoreIcon />
            </div>

            <div>
              <Divider orientation="vertical" variant="middle" flexItem />
            </div>
            <div>
              <BorderAllIcon />
            </div>
            <div>
              <PausePresentationIcon />
            </div>
            {/* </div> */}
          </div>
        </div>

        {jobs &&
          jobs.map((job, idx) => {
            return (
              <div key={idx}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid #cccccc",
                    padding: 30,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <div style={{ dispay: "block", cursor: "pointer" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ paddingRight: 10, marginTop: 15 }}>
                        <LocalConvenienceStoreIcon />
                      </div>
                      <div
                        onClick={() => {
                          handleLearnMore(job.job_id);
                        }}
                      >
                        <div>
                          <strong>{job.job_title}</strong>
                        </div>
                        <div>Nomad • {job.location}</div>
                        <div style={{ display: "flex" }}>
                          <Button
                            sx={{
                              margin: 0.5,
                              textTransform: "none",
                              borderRadius: 4,
                              color: "green",
                              backgroundColor: "#e5e5e5",
                            }}
                            variant="text"
                          >
                            {job.mode}
                          </Button>
                          <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                          />
                          <Button
                            sx={{
                              margin: 0.5,
                              textTransform: "none",
                              borderRadius: 4,
                              // color: "yellow",
                              backgroundColor: "#e5e5e5",
                            }}
                            variant="outlined"
                            color="warning"
                          >
                            Marketing
                          </Button>
                          <Button
                            sx={{
                              margin: 0.5,
                              textTransform: "none",
                              borderRadius: 4,
                              backgroundColor: "#e5e5e5",
                            }}
                            variant="outlined"
                            color="info"
                          >
                            Design
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                    }}
                  >
                    <Button
                      fullWidth
                      sx={{ textTransform: "none", borderRadius: 0 }}
                      variant="contained"
                    >
                      apply
                    </Button>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                      <ProgressLinear />
                    </div>
                    <div>5 applied of 10 capacity</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default JobsListBar;

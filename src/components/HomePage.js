import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCALSTORAGECONSTANT } from "../constant/cons";
import Header from "../pages/Common/Header";
import SearchJobInputs from "../pages/Common/SearchJobInputs";

const HomePage = () => {
  const [userId, setUserId] = useState("");
  const nav = useNavigate();

  const userDataId = localStorage.getItem(LOCALSTORAGECONSTANT.USERID);

  useEffect(() => {
    setUserId(userDataId);
  }, []);
  if (userId === null || userId === undefined || !userId) {
    // nav("/job_list");
  }

  console.log({ userId });
  const onLogOutHandler = () => {
    localStorage.clear();
    nav("/job_list");
  };

  const onLogInHandler = () => {
    nav("/signin");
  };
  return (
    <>
      <div className="LandingDiscover">
        <Header />
        <div className="landingMinu">
          <div className="DiscoverDivClass">
            <strong>
              Discover <br></br> more than
              <br></br>
              <div style={{ color: "blue" }}>5000+ Jobs</div>
            </strong>
          </div>
          <div>
            Great platform for the job seeker that searching for <br></br>
            new career neenis and passionate about startups.
          </div>
          <div className="SearchJobInputsArea" style={{ marginTop: 35 }}>
            <SearchJobInputs />
          </div>
        </div>
      </div>

      <div>
        {userId ? (
          <Button
            sx={{ margin: 2 }}
            variant="contained"
            onClick={onLogOutHandler}
          >
            Log Out
          </Button>
        ) : (
          <Button
            sx={{ margin: 2 }}
            variant="contained"
            onClick={onLogInHandler}
          >
            Log In
          </Button>
        )}
      </div>
    </>
  );
};

export default HomePage;

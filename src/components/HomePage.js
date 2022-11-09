import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCALSTORAGECONSTANT } from "../constant/cons";

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
      {userId ? (
        <Button
          sx={{ margin: 2 }}
          variant="contained"
          onClick={onLogOutHandler}
        >
          Log Out
        </Button>
      ) : (
        <Button sx={{ margin: 2 }} variant="contained" onClick={onLogInHandler}>
          Log In
        </Button>
      )}

      <h1>oops get to home</h1>
    </>
  );
};

export default HomePage;

import { useEffect } from "react";
import { getAllJobs } from "../services/user/user";

const JobList = () => {
  const fetchAllJobs = async () => {
    const response = await getAllJobs();
    const responseData = response && response.data && response.data.jobs;

    console.log({ responseData });
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);
  return (
    <>
      <h1>Job list page</h1>
    </>
  );
};

export default JobList;

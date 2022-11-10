import HomePage from "../components/HomePage";
import JobDetails from "../components/JobDetails";
import JobList from "../components/JobList";
import Postajob from "../components/Postajob";
import SignIn from "../components/SignIn";
import Signup from "../components/Signup";

const routes = [
  {
    path: "/signup",
    component: <Signup />,
  },
  {
    path: "/signin",
    component: <SignIn />,
  },

  {
    path: "/job_list",
    component: <JobList />,
  },

  {
    path: "/job_detail/:id",
    component: <JobDetails />,
  },

  {
    path: "/post_job",
    component: <Postajob />,
  },

  {
    path: "/",
    component: <HomePage />,
  },
];

export default routes;

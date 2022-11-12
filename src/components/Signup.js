import "../public/style.css";

import SignUpLeft from "../pages/authPages/SignUpLeft";
import SignUpRight from "../pages/authPages/SignUpRight";

const Signup = () => {
  return (
    <div className="signupContainer">
      <SignUpLeft />

      <SignUpRight />
    </div>
  );
};

export default Signup;

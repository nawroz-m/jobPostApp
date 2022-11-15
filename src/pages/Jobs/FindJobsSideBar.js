import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { Checkbox } from "@mui/material";
import { useState } from "react";

const FindJobsSideBar = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div>
        <div>
          <div
          // style={{
          //   display: "flex",
          // }}
          >
            <strong>Type of Employment</strong>
            <ExpandLessIcon />
          </div>
          <div>
            <div>
              <Checkbox
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              Ful-time(3)
            </div>
            <div>
              <Checkbox
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              Part- imelbl
            </div>
            <div>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              Remote (2)
            </div>
            <div>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              Internship (24)
            </div>
            <div>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              Contract (3)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindJobsSideBar;

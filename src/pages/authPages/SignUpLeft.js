import "../../../src/public/style.css";

import Sheet from "@mui/joy/Sheet";
import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import image from "../../../src/public/images/grapPlotly.png";
import profilePic from "../../../src/public/images/jobLogo.png";
import { Avatar, Card, CardContent, FormControl } from "@mui/material";
import CompanyLogo from "../Common/CompanyLogo";

const SignUpLeft = () => {
  return (
    <div className="leftMinu">
      <div className="companyLogo">
        <CompanyLogo />
      </div>

      <Card className="cardJobPlot" sx={{ minWidth: 100, width: 200 }}>
        <CardContent>
          <div>
            <img src={image} height={75} width={95} />
          </div>

          <div className="boldFontClass">100k+</div>
          <div className="viewLessFontClass">People got hired</div>
        </CardContent>
      </Card>

      <FormControl>
        <div
          className="CanvaOverlayAvatorCard"
          overlay
          row
          sx={{ gap: 2, mt: 1 }}
        >
          <Sheet
            component="label"
            // key={num}
            // variant="outlined"
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              boxShadow: "sm",
              // borderRadius: "md",
              gap: 1.5,
              backgroundColor: "white",
            }}
          >
            <Avatar
              alt={`person`}
              src={profilePic}
              sx={{
                mt: -4,
                mr: 3,
                mb: -4,
                p: 0.5,
                backgroundColor: "white",
                alignSelf: "end",
              }}
            />

            <div className="ConvaUserName">Adam Sandler</div>

            <div className="viewLessFontClass">Lead Engineer at Canva</div>
            <div>
              <FormatQuoteSharpIcon style={{ color: "blue" }} />{" "}
              <strong>
                "Great platform for the job seeker that searching for new career
                heights."
              </strong>
            </div>
          </Sheet>
        </div>
      </FormControl>
    </div>
  );
};

export default SignUpLeft;

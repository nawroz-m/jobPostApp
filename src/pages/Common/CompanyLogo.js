import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import { Typography } from "@mui/material";

const CompanyLogo = () => {
  return (
    <>
      <DataSaverOffIcon
        sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "blue" }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
        }}
      >
        JobHuntly
      </Typography>
    </>
  );
};

export default CompanyLogo;

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import CompanyLogo from "./CompanyLogo";
import { useNavigate } from "react-router-dom";

const pages = ["Find Jobs", "Brows Companies"];

const Header = () => {
  const nav = useNavigate();

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        style={{
          background: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CompanyLogo />

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  color: "black",
                  //   backgroundColor: "white",
                },
              }}
            >
              {/* {pages.map((page) => ( */}
              <Button
                onClick={() => {
                  nav("/job_list");
                }}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Find Jobs
              </Button>

              <Button
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Brows Companies
              </Button>
              {/* ))} */}
            </Box>

            <Button
              sx={{ margin: 2, textTransform: "none" }}
              variant="text"
              onClick={() => {
                nav("/signin");
              }}
            >
              <strong>Login</strong>
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />

            <Button
              sx={{ margin: 2, textTransform: "none" }}
              variant="contained"
              onClick={() => {
                nav("/signup");
              }}
            >
              <strong>Sign Up</strong>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Search from "../Search/index";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const IconContainer = styled.div`
  & > *:not(:last-child) {
    padding-right: 16px;
  }
`;

const CustomizedAppBar = styled(AppBar)`
  color: white;
`;

const CustomizedImage = styled.img`
  max-height: 50px;
`;
const CustomizedTypography = styled(Typography)`
  padding: 12px;
`;

export default function Navbar() {
  return (
    <>
      <Box>
        <CustomizedAppBar position="sticky" style={{ background: "black" }}>
          <Toolbar>
            <div style={{ flexGrow: 1, display: "flex" }}>
              <CustomizedImage src="/images/logo.jpg" />
              <CustomizedTypography
                component={Link}
                to="/home"
                style={{ color: "white", textDecoration: "none" }}
              >
                Home
              </CustomizedTypography>
              <CustomizedTypography
                component={Link}
                to="/series"
                style={{ color: "white", textDecoration: "none" }}
              >
                Series
              </CustomizedTypography>
              <CustomizedTypography
                component={Link}
                to="/films"
                style={{ color: "white", textDecoration: "none" }}
              >
                Films
              </CustomizedTypography>
              <CustomizedTypography
                component={Link}
                to="/latest"
                style={{ color: "white", textDecoration: "none" }}
              >
                Latest
              </CustomizedTypography>
              <CustomizedTypography
                component={Link}
                to="/mylist"
                style={{ color: "white", textDecoration: "none" }}
              >
                My List
              </CustomizedTypography>
            </div>
            <IconContainer style={{ display: "flex" }}>
              <Search />
              <NotificationsIcon />
              <AccountCircleIcon />
            </IconContainer>
          </Toolbar>
        </CustomizedAppBar>
      </Box>
    </>
  );
}

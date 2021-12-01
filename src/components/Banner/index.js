import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CustomizedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: red;
  height: 500px;
`;
const CustomizedDivTwo = styled.div`
  display: flex;
  margin-top: 4%;
  margin-left: 10%;
`;

const CustomizedBottomOne = styled(Button)`
  background-color: white;
  color: black;
  margin-right: 12px;
  height: 50px;
  width: 21%;
  font-weight: bold;
`;
const CustomizedBottomTwo = styled(Button)`
  background-color: gray;
  height: 50px;
  width: 30%;
  font-weight: bold;
`;

const BoxCustom = styled(Box)`
  margin-left: 10%;
`;

const TypographyCustom = styled(Typography)`
  position: relative;
  color: white;
  margin-top: 2%;
  margin-left: 10%;
  font-family: inherit;
  font-weight: bold;
`;

const Banner = ({ name, description, image }) => {
  console.log(image);
  return (
    <>
      <CustomizedDiv style={{ backgroundImage: `url(${image})` }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              style={{
                position: "relative",
                color: "white",
                marginTop: "23%",
                marginLeft: "10%",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              {name}
            </Typography>
            <BoxCustom>
              <Button variant="outlined"> Action </Button>
              <Button variant="outlined"> Crime </Button>
              <Button variant="outlined"> Drama </Button>
            </BoxCustom>
            <TypographyCustom>{description}</TypographyCustom>
            <CustomizedDivTwo>
              <CustomizedBottomOne variant="contained">
                <PlayArrowIcon />
                Play
              </CustomizedBottomOne>
              <CustomizedBottomTwo variant="contained">
                <InfoIcon />
                More Info
              </CustomizedBottomTwo>
            </CustomizedDivTwo>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </CustomizedDiv>
    </>
  );
};

export default Banner;

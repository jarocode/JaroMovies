import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Typography, Button, Snackbar, Alert } from "@mui/material";
import { FaClock } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link, Element } from "react-scroll";
import { useMediaQuery } from "react-responsive";

import moviePoster from "../../../assets/images/bg.webp";
import { colors } from "../../../config.js/theme";
import { DetailsContext } from "../../../context/DetailsContext";
import { FavouriteContext } from "../../../context/FavouriteContext";
import { WatchLaterContext } from "../../../context/WatchLaterContext";

import device from "../../../config.js/mediaQueries";

const { mobile } = device;

const MovieJumbotron = () => {
  const [open, setOpen] = React.useState(false);
  const { details } = useContext(DetailsContext);
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const description =
    " Not your regular movie website...Don't miss out on latest, hottest and trending movies, Stay up to date with the latest episodes of your favoutite tv series and more!";
  const title = "Enjoy Movies of All Genres";

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Element name="movieJumbotron">
      <Container bg={moviePoster}>
        <InfoDiv>
          <Typography
            variant="h3"
            component="h2"
            color={colors.white}
            fontWeight="bold"
            marginBottom="1.5rem"
            fontSize={isMobile ? "1.8em" : "55px"}
            style={{ wordWrap: "break-word" }}
            align="center"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="h2"
            color={colors.white}
            marginBottom="1.5rem"
            fontSize="22px"
            align="center"
          >
            {description}
          </Typography>
          <BtnDiv>
            <Link
              to="movieSelection"
              spy={true}
              offset={50}
              smooth={true}
              duration={600}
            >
              <Btn
                variant="contained"
                BtnBg={colors.primary}
                BtnColor={colors.white}
              >
                Get Started
              </Btn>
            </Link>
          </BtnDiv>
        </InfoDiv>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Movie added successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Element>
  );
};

export default MovieJumbotron;

const Container = styled.div`
  margin: auto;
  width: 70rem;

  background: url(${(props) => props.bg}) no-repeat top center/cover;
  min-height: 40rem;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  box-shadow: inset 1em 0.5em 1em 1em #000;
  padding-top: 8rem;
  &::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
    background: ${colors.dark};
    opacity: 0.6;
    position: absolute;
    z-index: 2;
  }
  @media ${mobile} {
    width: 20rem;
    min-height: 10rem;
    justify-content: center;
    margin-bottom: 11rem;
    padding-top: 4rem;
  }
`;

const InfoDiv = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: inherit;
  /* background: #fff; */
  padding: 2rem;
  position: relative;
  z-index: 5;
  margin-top: -8rem;
  @media ${mobile} {
    width: 98%;
    padding: 0.7rem;
    min-height: 60%;
  }
`;

const BtnDiv = styled.div`
  margin-top: 2rem;
`;

const Btn = styled(Button)`
  margin-right: 2rem;
  background: ${({ BtnBg }) => BtnBg};
  color: ${({ BtnColor }) => BtnColor};
  height: 4rem;
  width: 181px;
  border: ${({ border }) =>
    border ? `1px solid ${border}` : `1px solid ${colors.primary}`};
  &:hover {
    background: none;
    border: 1px solid ${colors.white};
  }
  @media ${mobile} {
    display: block;
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;

import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Dialog, Slide, Typography, Button } from "@mui/material";
import { FaClock } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

import url from "../../config.js/url";
import { colors } from "../../config.js/theme";
import { FavouriteContext } from "../../context/FavouriteContext";
import { WatchLaterContext } from "../../context/WatchLaterContext";
import device from "../../config.js/mediaQueries";

const { mobile } = device;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AppModal({
  open,
  handleClickOpen,
  handleClose,
  setOpen,
  content,
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { setFavourites } = useContext(FavouriteContext);
  const { setWatchLater } = useContext(WatchLaterContext);

  const addToFavourite = () => {
    setFavourites((prev) => [...prev, content]);
    setOpen(true);
  };
  const watchLater = () => {
    setWatchLater((prev) => [...prev, content]);
    setOpen(true);
  };

  return (
    <Dialog
      open={open}
      sx={{ paper: { backgroundColor: colors.dark } }}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <Container>
        <TopDiv bg={url["IMAGE_BASE_URL"] + content?.backdrop_path}>
          <TitleDiv>
            <Typography
              variant="subtitle2"
              component="h2"
              color={colors.white}
              marginBottom="1rem"
              lineHeight={"45px"}
              fontSize="37px"
              fontWeight={"500px"}
            >
              {" "}
              {content?.title}
            </Typography>
            <BtnDiv>
              <Btn
                variant="contained"
                BtnBg={colors.primary}
                BtnColor={colors.white}
                onClick={watchLater}
                startIcon={!isMobile && <FaClock />}
              >
                Watch later
              </Btn>
              <Btn
                variant="outlined"
                BtnBg={"none"}
                BtnColor={colors.white}
                border={colors.white}
                onClick={addToFavourite}
                startIcon={
                  !isMobile && <MdOutlineAddCircle color={colors.white} />
                }
              >
                Add to Favourites
              </Btn>
            </BtnDiv>
          </TitleDiv>
        </TopDiv>
        <BottomDiv>
          <Typography
            variant="subtitle2"
            component="h2"
            color={colors.white}
            marginBottom="1.5rem"
            fontSize="18px"
          >
            {" "}
            {content?.overview}
          </Typography>
        </BottomDiv>
      </Container>
    </Dialog>
  );
}

const Container = styled.div`
  color: #fff;
  background: ${colors.dark};
  min-height: 30rem;
  min-width: 40rem;
  border-radius: 0.5rem;
`;

const TopDiv = styled.div`
  position: relative;
  width: 40rem;
  height: 20rem;
  z-index: 1;
  background: url(${(props) => props.bg}) no-repeat center center/cover;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.5);
    z-index: 2;
  }
`;

const TitleDiv = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  width: 90%;
  height: 50%;
  padding: 1rem;
  word-wrap: break-word;
`;

const BtnDiv = styled.div`
  margin-top: 2rem;
`;

const Btn = styled(Button)`
  margin-right: 2rem;
  background: ${({ BtnBg }) => BtnBg};
  color: ${({ BtnColor }) => BtnColor};
  height: 3rem;
  width: 170px;
  font-size: 10px !important;
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

const BottomDiv = styled.div`
  padding: 2rem 1rem;
`;

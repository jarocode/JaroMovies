import React from "react";
import styled from "@emotion/styled";
import { useContext } from "react";

import MovieCard from "./MovieCard";
import url from "../../config.js/url";
import { DetailsContext } from "../../context/DetailsContext";
import AppModal from "./AppModal";
import { useModal } from "../../customhooks/useModal";

const MovieCardRow = ({ movieData, setOpen }) => {
  const { details } = useContext(DetailsContext);
  const { open, handleClickOpen, handleClose } = useModal();

  return (
    <Container>
      <AppModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        setOpen={setOpen}
        content={details}
      />
      {movieData.map((movie) => {
        const { id, poster_path, release_date, title } = movie;
        return (
          <MovieCard
            key={id}
            id={id}
            movieData={movieData}
            poster={url["IMAGE_BASE_URL"] + poster_path}
            title={title}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            date={release_date}
          />
        );
      })}
    </Container>
  );
};

export default MovieCardRow;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2%;
`;

import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import TabPanel from "../TabPanel";
import { WatchLaterContext } from "../../../../context/WatchLaterContext";
import MovieListCard from "../../../reusableComponents/MovieListCard";
import NoMovieFound from "../../../reusableComponents/NoMovieFound";
import device from "../../../../config.js/mediaQueries";

const { mobile } = device;

const WatchLater = ({ value }) => {
  const { watchLater, setWatchLater } = useContext(WatchLaterContext);
  const isWatchLaterData = watchLater.length !== 0;
  return (
    <TabPanel value={value} index={1}>
      <Container>
        {isWatchLaterData ? (
          watchLater.map((data) => (
            <MovieListCard
              key={data.id}
              movieData={data}
              deleteData={setWatchLater}
            />
          ))
        ) : (
          <NoMovieFound text="No movies added yet" />
        )}
      </Container>
    </TabPanel>
  );
};

export default WatchLater;

const Container = styled.div`
  width: 100%;
  min-height: 10rem;
  background: none;
`;

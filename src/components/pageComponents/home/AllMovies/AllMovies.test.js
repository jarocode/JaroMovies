import { render, screen } from "@testing-library/react";

import AllMovies from "./AllMovies";
import { MovieProvider } from "../../../../context/MovieContext";

describe("AllMovies", () => {
  test("renders AllMovies Component", () => {
    render(
      <MovieProvider>
        <AllMovies />
      </MovieProvider>
    );

    // screen.debug();
  });
});

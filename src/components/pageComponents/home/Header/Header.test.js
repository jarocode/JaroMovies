import { render, screen } from "@testing-library/react";

import Header from "./Header";
import { MovieProvider } from "../../../../context/MovieContext";

describe("Header", () => {
  test("renders Header Component", () => {
    render(
      <MovieProvider>
        <Header />
      </MovieProvider>
    );
    // screen.debug();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "./Header";
import { MovieProvider } from "../../../../context/MovieContext";

describe("Header", () => {
  test("renders Header Component", () => {
    render(
      <MovieProvider>
        <Header />
      </MovieProvider>
    );
    screen.debug();
    // fireEvent.change(screen.getByPlaceholderText("Search movies..."), {
    //   target: { value: "javascript" },
    // });
    userEvent.type(
      screen.getByPlaceholderText("Search movies..."),
      "javascript"
    );
    screen.debug();
  });
});

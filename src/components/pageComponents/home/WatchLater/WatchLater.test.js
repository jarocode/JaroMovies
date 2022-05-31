import { render, screen } from "@testing-library/react";

import WatchLater from "./WatchLater";
import { WatchLaterProvider } from "../../../../context/WatchLaterContext";

describe("WatchLater", () => {
  test("renders WatchLater Component", () => {
    render(
      <WatchLaterProvider>
        <WatchLater />
      </WatchLaterProvider>
    );
    // screen.debug();
  });
});

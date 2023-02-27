import React from "react";
import { describe, it } from "@jest/globals";
import {
  createMemoryRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

function Example() {
  const navigate = useNavigate();

  function onClick() {
    navigate("/libraries/libraryId");
  }

  return <button onClick={onClick} data-testid="library-entry-libraryId" />;
}

const routes = [
  { path: "/libraries", element: <Example /> },
  { path: "/libraries/:libraryId" },
];

describe("LibraryEntry", () => {
  it("navigates to library", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/libraries"],
    });
    render(<RouterProvider router={router} />);
    const entry = screen.getByTestId(`library-entry-libraryId`);
    fireEvent.click(entry);
  });
});

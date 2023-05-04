import React from "react";
import { render, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import { AuthProvider } from "./AuthContext";

const TestComponent = () => <div>Protected content</div>;

describe("ProtectedRoute", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders protected content when authenticated", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ isAuthenticated: true }),
    });

    await act(async () => {
      render(
        <AuthProvider>
          <MemoryRouter initialEntries={["/protected"]}>
            <Routes>
              <Route path="/protected" element={<ProtectedRoute />}>
                <Route index element={<TestComponent />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </AuthProvider>
      );
    });

    expect(screen.getByText("Protected content")).toBeInTheDocument();
  });
});

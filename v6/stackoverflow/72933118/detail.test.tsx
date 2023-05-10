import { render } from "@testing-library/react"
import React from "react"
import { MemoryRouter } from "react-router-dom"
import { Detail } from "./detail"

describe('72933118', () => {
  test('should pass', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/user', search: '?id=1', state: { user: { id: 1 } } }]}>
        <Detail />
      </MemoryRouter>
    )
  })
})

import React from 'react';
import { MemoryRouter, Route, Routes } from "react-router-dom"
import Item from './item';
import { render } from "@testing-library/react";

describe('76083093', () => {
  test('should pass', () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/1"]}>
        <Routes>
          <Route path="/:id" element={<Item />} />
        </Routes>
      </MemoryRouter>
    )
    expect(asFragment().firstChild).toMatchInlineSnapshot(`
<pre>
  {"id":"1"}
</pre>
`);
  })
})

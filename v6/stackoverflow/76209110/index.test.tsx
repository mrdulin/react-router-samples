import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, it } from "@jest/globals";
import { Routes, Route, useHref } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const Contact = ({ to }) => {
  const href = useHref(to)
  return <pre>{href}</pre>
}

describe('76209110', () => {
  it('should pass', () => {
    const html = renderToString(
      <StaticRouter location={'/courses'}>
        <Routes>
          <Route
            path="courses"
            element={<Contact to="advanced-react" />}
          />
        </Routes>
      </StaticRouter>
    )
    console.log('html: ', html)
  })
})

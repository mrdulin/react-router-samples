import React from 'react';
import { useParams } from 'react-router-dom';

function Item() {
  return (
    <pre>{JSON.stringify(useParams())}</pre>
  );
}

export default Item;

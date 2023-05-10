import React from 'react'
import { useLocation } from 'react-router-dom'

export const Detail = () => {
  const { user } = useLocation().state;
  console.log('user: ', user);
  return (
    <div>Detail</div>
  )
}

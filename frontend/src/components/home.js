import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <Link to= 'product'>Products</Link>
    </div>
  )
}

import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
            <Helmet>
    <title>Amazona</title>
    </Helmet>
      <h2>Welcome to Home Page</h2>
      <Link to= '/product'>Products</Link>
      <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      </>
    </div>
  )
}

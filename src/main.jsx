import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
  // <React.StrictMode>
  //   <Router />
  // </React.StrictMode>
)

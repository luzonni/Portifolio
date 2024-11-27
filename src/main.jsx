import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './Routes.jsx'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)

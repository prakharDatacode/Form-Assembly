import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"; // Bootstrap JS for components
import "bootstrap/dist/js/bootstrap.bundle.min"; // Required for toggle functionality
import App from './App.jsx'
import "./assets/styles/formAssembly.scss"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

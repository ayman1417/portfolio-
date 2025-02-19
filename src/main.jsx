import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'animate.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import WOW from "wow.js"; // Import WOW.js

const initWOW = () => {
  new WOW().init();
};
import { inject } from '@vercel/analytics';
inject();




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
initWOW();
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Authprovider from './context/authprovider.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './AboutUs.css'
import './CoursesCss.css'
import './FaqCss.css'
import './ResourceCss.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Authprovider>
      <App />
    </Authprovider>
  </BrowserRouter>,
)

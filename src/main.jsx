import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UNSAFE_DataRouterStateContext } from 'react-router-dom'
import Routers from './Routers.jsx/Routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
)

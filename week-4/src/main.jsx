import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Wireframe from './Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Wireframe />
  </React.StrictMode>,
)

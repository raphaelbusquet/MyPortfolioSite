import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { IsDarkContextProvider } from './context/IsDarkContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    // Creating a provider context
  <React.StrictMode>
    <IsDarkContextProvider>
      <App />
    </IsDarkContextProvider>
  </React.StrictMode>,
)

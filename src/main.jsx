import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextProvider from './features/ContextProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>


    <App />
    </ContextProvider>
  </StrictMode>,
)

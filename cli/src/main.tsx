import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import RoutingConfig from './Routing/routing'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> 
      <RoutingConfig />
    </BrowserRouter>
  </StrictMode>
)

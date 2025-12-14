import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CoolKey } from './CoolKey';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CoolKey />
    </BrowserRouter>
  </StrictMode>,
)

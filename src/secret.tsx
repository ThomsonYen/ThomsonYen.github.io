import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SecretPage } from './components/SecretPage'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SecretPage />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QuantumPage } from './components/QuantumPage'
import './styles.css'
import { countView } from './views'

countView('quantum')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuantumPage />
  </StrictMode>,
)

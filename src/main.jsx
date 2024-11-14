import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Component/Header.jsx'
import Sidebar from './Component/Sidebar.jsx'
import './index.css'
import Content from './Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
  </StrictMode>,
)

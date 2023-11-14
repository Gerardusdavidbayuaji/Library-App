import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages'
import './styles/index.css'
import ContentLayout from './components/contentlayout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Index/> */}
    <ContentLayout/>
  </React.StrictMode>,
);
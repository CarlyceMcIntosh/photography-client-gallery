import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ClientGallery from './pages/ClientGallery'
import AdminDashboard from './pages/AdminDashboard'
import './index.css';
import ContactPage from './pages/Contact'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<ClientGallery />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path ="/login" element={<LoginPage/>} />
        <Route path="/contact-form" element={<ContactPage />} />

        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Login from './pages/Login'
import ClientGallery from './pages/ClientGallery'
import AdminDashboard from './pages/AdminDashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<ClientGallery />} />
        <Route path="/admin" element={<AdminDashboard />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

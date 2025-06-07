import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
         <Route path="/settings" element={<SettingsPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
      
      </Routes>
  
    </div>
  )
}

export default App

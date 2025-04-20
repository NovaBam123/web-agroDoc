import { useState } from 'react'
import './index.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Teknik from './pages/Teknik'
import MediaTanam from './pages/MediaTanam'
import Ec from './pages/Ec'
import SyaratTumbuh from './pages/SyaratTumbuh'

function App() {
  const [sidebarShow, setSidebarShow] = useState(false);
  const toggleSidebar = () => setSidebarShow(prev => !prev);
  
  return (
    <>
    <Header onToggle={toggleSidebar} isOpen={sidebarShow}/>
    
    <main>
      <Sidebar isOpen={sidebarShow} onToggle={toggleSidebar}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teknik' element={<Teknik />} />
        <Route path='/media' element={<MediaTanam />}/>
        <Route path='/ec' element={<Ec />}/>
        <Route path='/syarat-tumbuh' element={<SyaratTumbuh />}/>
      </Routes>
    </main>
    </>
  )
}

export default App

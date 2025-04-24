import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import './darkmode.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/garlic/Home'
import Teknik from './pages/garlic/Teknik'
import MediaTanam from './pages/garlic/MediaTanam'
import Ec from './pages/garlic/Ec'
import SyaratTumbuh from './pages/garlic/SyaratTumbuh'
import HardneckSoftneck from './pages/garlic/Hardneck dan Softneck'
import Varietas from './pages/garlic/VarietasIndonesia'
import ProsesCuring from './pages/garlic/Panen'
import Vernalisasi from './pages/garlic/Vernalisasi'
import JagungPendahuluan from './pages/jagung/JagungPendahuluan'
import SyaratTumbuhJagung from './pages/jagung/SyaratTumbuh'

const topicsData= {
  garlic:[
      {title: 'Pengertian Hidroponik', path: '/'},
      {title: 'Teknik Hidroponik', path: '/teknik'},
      {title: 'Media Tanam Hidroponik', path: '/media'},
      {title: 'Electrical Conductivity(EC), pH dan Suhu', path: '/ec'},
      {title: 'Syarat Tumbuh Garlic di Indonesia', path: '/syarat-tumbuh'},
      {title: 'Hardneck dan Softneck Garlic', path: '/hardneck-softneck'},
      {title: 'Varietas Bawang Putih di Indonesia', path: '/varietas'},
      {title: 'Proses Pasca Panen dan Curing Garlic', path: '/proses-curing'},
      {title: 'Dormansi dan Proses Vernalisasi pada Garlic', path: '/vernalisasi'},
  ],
  jagung: [
      {title: 'Pendahuluan', path: '/jagung-pendahuluan'},
      {title: 'Syarat Tumbuh Jagung', path: '/jagung-syarat-tumbuh'}
  ]
}

function App() {
  const [sidebarShow, setSidebarShow] = useState(false);
  const [selectedKomoditas, setSelectedKomoditas]= useState('garlic');
  const [theme, setTheme]= useState('light');
  const toggleSidebar= ()=> setSidebarShow(prev => !prev);
  const toggleTheme= ()=> setTheme(prev=> prev=== 'light'? 'dark': 'light');
  
  return (
    <>
    <div className={theme}>
      <Header 
        onToggle={toggleSidebar} 
        isOpen={sidebarShow} 
        onSelectKomoditas={setSelectedKomoditas}
        onToggleTheme= {toggleTheme}
        currentTheme= {theme}
      />
      
      <main>
        <Sidebar 
          onToggle={toggleSidebar} 
          isOpen={sidebarShow} 
          topics={topicsData[selectedKomoditas]}  
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teknik' element={<Teknik />} />
          <Route path='/media' element={<MediaTanam />}/>
          <Route path='/ec' element={<Ec />}/>
          <Route path='/syarat-tumbuh' element={<SyaratTumbuh />}/>
          <Route path='/hardneck-softneck' element={<HardneckSoftneck />}/>
          <Route path='/varietas' element={<Varietas />} />
          <Route path='/proses-curing' element={<ProsesCuring />}/>
          <Route path='/vernalisasi' element={<Vernalisasi />}/>
          
          <Route path='/jagung-pendahuluan' element={ <JagungPendahuluan /> }/>
          <Route path='/jagung-syarat-tumbuh' element={<SyaratTumbuhJagung />}/>
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutDir from './AboutDir'
import AboutPri from './AboutPri'
import Biotest1 from './Biotest1'
import Class12 from './Class12'
import Contact from './Contact'
import English from './English'
import Faculty from './Faculty'
import Footer from './Footer'
import Gallery from './Gallery'
import Hindi from './Hindi'
import Home from './Home'
import Math from './Math'
import MissionVision from './MissionVision'
import Navbar from './Navbar'
import Notice from './Notice'
import OurSchool from './OurSchool'
import Sankrit from './Sankrit'
import Science from './Science'
import SocalScience from './Socal-Science'
import Test12 from './Test12'


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/faculty' element={<Faculty/>}/>
        <Route path='/science' element={<Science/>}/>
        <Route path='/socal-science' element={<SocalScience/>}/>
        <Route path='/math' element={<Math/>}/>
        <Route path='/sankrit' element={<Sankrit/>}/>
        <Route path='/english' element={<English/>}/>
        <Route path='/hindi' element={<Hindi/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/class12' element={<Class12/>}/>
        <Route path='/notice' element={<Notice/>}/>
        <Route path='/test12' element={<Test12/>}/>
        <Route path='/biotest1' element={<Biotest1/>}/>
        <Route path='/mission&vision' element={<MissionVision/>}/>
        <Route path='/ourschool' element={<OurSchool/>}/>
        <Route path='/aboutdir' element={<AboutDir/>}/>
        <Route path='/aboutpri' element={<AboutPri/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

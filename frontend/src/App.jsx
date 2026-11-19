import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './User/Pages/Home'
import Contact from './User/Pages/Contact'
import Books from './User/Pages/Books'
import Auth from './Pages/Auth'
import Profile from './User/Pages/Profile'
import View from './User/Pages/View'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import AdminResource from './Admin/Pages/AdminResource'
import AdminSettings from './Admin/Pages/AdminSettings'
import { useState } from 'react'
import Preloader from './Components/Preloader'
import Header from './User/Components/Header'
import Footer from './components/Footer'


function App() {

  const [isLoading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)

  }, 3000)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={isLoading ? <Preloader /> : <Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />  
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/books/:id' element={<View />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/resources' element={<AdminResource />} />
        <Route path='/admin/settings' element={<AdminSettings />} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
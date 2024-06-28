
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Works from './pages/Works'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import LayoutOne from './assets/component/layout/LayoutOne'

function App() {

  const route = createBrowserRouter (
    createRoutesFromElements(
      <Route>
        <Route path='/' exact element={<LayoutOne/>} >
        <Route index element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/resume' element={<Resume />}/>
       <Route path='/works' element={<Works />}/>
       <Route path='/blogs' element={<Blogs/>} />
       <Route path='/contact' element={<Contact/>} />
       </Route>

      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={route} />


    </>
  )
}

export default App

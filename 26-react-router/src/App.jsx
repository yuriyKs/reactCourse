import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import Courses from './components/Courses'
import SingleCourse from './components/SingleCourse'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="about" element={<About />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
            <Route path="contacts" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

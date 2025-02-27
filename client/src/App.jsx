import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import { Home } from './pages/student/Home'
import { CoursesList } from './pages/student/CoursesList'
import { CourseDetails } from './pages/student/CourseDetails'
import { MyEnrollments } from './pages/student/MyEnrollments'
import { Player } from './pages/student/Player'
import { Loading } from './components/student/Loading'
import { Dashboard } from './pages/educator/Dashboard'
import { Educator } from './pages/educator/Educator'
import { MyCourses } from './pages/educator/MyCourses'
import { AddCourse } from './pages/educator/AddCourse'
import { StudentEnroll } from './pages/educator/StudentEnroll'
import Navbar from './components/student/Navbar'
import "quill/dist/quill.snow.css";

export default function App() {

  const isEducatoreRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
          {!isEducatoreRoute &&  <Navbar />}
      
        <Routes>
          <Route  path='/' element = {<Home />}/>
          <Route path='/Course-List' element = {<CoursesList />}/>
          <Route path='/Course-Details' element = {<CourseDetails />} />
          <Route path='/My-Enrollment' element = {<MyEnrollments />} />
          <Route path='/Player/:courseId' element={<Player />}/>
          <Route path='/Course/:id' element={<CourseDetails />} />
          <Route path='/Course-list/:id' element={<CoursesList />} />
         <Route path='/Loading/:path' element={<Loading />} />



      <Route path='/educator' element={<Educator />}>
          <Route path='/educator' element={<Dashboard />}/>
          <Route path='My-courses' element={<MyCourses/>} />
          <Route path='Add-Courses' element = {<AddCourse/>}/>
          <Route path='Student-enroll' element = {<StudentEnroll/>} />
      </Route>
        </Routes>

    </div>
  )
}
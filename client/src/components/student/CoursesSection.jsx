import React from 'react'
import { Link } from 'react-router-dom'
import { AddContext } from '../../context/AddContext'
import { CourseCard } from './CourseCard'
import { useContext } from 'react'

export const CoursesSection = () => {


  const {allcourses} = useContext(AddContext)
  return (
    <div>
      <h2 className='text-3xl font-madium text-grey-800'>Learn From the Best</h2>
      <p className='text-sm md:text-base text-grey-500 mt-3 '>Discover our top-rated courses across 
        various categories, From coding and design tp buisness and
        wellness, our courses are cratfed to delivery results.
      </p>

      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allcourses.slice(0,4).map((course,index)=> <CourseCard  key={index} course = {course}/>)}
      </div>

      <Link  to={'/Course-List'} onClick={()=> scrollTo(0,0)} 
      className='text-grey-500 border border-grey-500/30 px-10py-3 rounded'>
        Show all Courses
      </Link>



    </div>
  )
}

import React, { useContext, useEffect , useState} from 'react'
import { AddContext } from '../../context/AddContext'
import { SearchBar } from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import { CourseCard } from '../../components/student/CourseCard'
import { assets } from '../../assets/assets'
import { Footer } from '../../components/student/Footer'

export const CoursesList = () => {
const {navigate , allcourses} = useContext(AddContext)

const {input} = useParams()

const [filtercourse ,setfiltercourse] = useState([])

  useEffect(()=>{
    if(allcourses && allcourses.length > 0){
      const tempcourse = allcourses.slice()

      input ?
      setfiltercourse(tempcourse.filter(
        item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
      ))
      : setfiltercourse(tempcourse)



    }
  },[allcourses,input])

  return (
    <>
    <div className='relative md:px-36 px-8 pt-20 text-left'>
      <div className='flex md:flex-row flex-col gap-6 items-start justify-between
      w-full'>
        <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
        <p className='text-gray-500'>
          <span className='text-blue-600 cursor pointer' onClick={()=>navigate('/')}>Home </span>
          / <span>CourseList</span></p>
        </div>
        <SearchBar data={input}/>
      </div>
      {
        input && <div className='inline-flex items-center gap-4 px-4 py-2 border 
        mt-8-mb-8 text-gray-600'>
          <p>{input}</p>
          <img src={assets.cross_icon} alt=""  className='cursor-pointer' 
          onClick = {()=> navigate('/Course-List')}/>
          
          </div>
      }
      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
          {filtercourse.map((course , index)=> <CourseCard key={index} course={course}/>)}
      </div>
    </div>
    
    <Footer />
    </>
  )
}

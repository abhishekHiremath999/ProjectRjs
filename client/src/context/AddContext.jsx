import { createContext } from "react";
import { dummyCourses } from "../assets/assets";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AddContext = createContext()

export const AddContextProvider = (props) =>{

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allcourses, setAllcourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)
    const [enrolledCourses, setEnrolledCourses] = useState([])
            //Fetch All Courses
            const fetchAllCourses = async () =>{
                setAllcourses(dummyCourses)
            }

            //Function to calculate Average rating
            const calculateRating =(course) =>{
                if(course.courseRatings.length === 0){
                    return 0;
                }
                let totalRating = 0 
                course.courseRatings.forEach(rating => 
                    {
                    totalRating += rating.rating
                })
                return totalRating / course.courseRatings.length
            }

                // fuonction to calculate course chapter time
                const calculateChapterTime = (chapter) => {
                    let time= 0
                    chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration) 
                    return humanizeDuration(time * 60 * 1000,{units : ['h','m']})
                }

                // function calculate course duration

                const calculateCourseDuration = (course) =>{
                    let time =0

                course.courseContent.map((chapter) => chapter.chapterContent.map((lecture)=> time+=
            lecture.lectureDuration))
            return humanizeDuration(time * 60 * 1000,{units : ['h','m']})
                }



                //function calculate no of lecture in the course

                const calculateNoOfLectures = (course) =>{
                    let totalLectures =0;
                    course.courseContent.forEach(chapter => {
                        if(Array.isArray(chapter.chapterContent)){
                            totalLectures += chapter.chapterContent.length;
                        }
                    });
                    return totalLectures;
                }

                //Fecth user enrolled courses
                const fetchenrolledCourse= async()=>{
                    setEnrolledCourses(dummyCourses)
                }

                useEffect(()=>{
                    fetchAllCourses()
                    fetchenrolledCourse()
                },[])

            const value = {
                currency, allcourses , navigate,calculateRating,
                isEducator,setIsEducator,calculateChapterTime,calculateNoOfLectures,
                calculateCourseDuration,fetchenrolledCourse,enrolledCourses
            }


    return (
            <AddContext.Provider value={value}>
                {props.children}
            </AddContext.Provider>


    )
}
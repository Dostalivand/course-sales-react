import React from 'react'
import Landing from '../../Components/Landing/Landing'
import LastCourses from '../../Components/LastCourses/LastCourses'
import CourseTeacher from '../../Components/CourseTeacher/CourseTeacher'
import CourseComments from '../../Components/CourseComments/CourseComments'
import Article from '../../Components/LastArticle/Article'
import Footer from '../../Components/Footer/Footer'
import CourseServices from '../../Components/CourseServices/CourseServices'
import NavbarHome from '../../Components/NavbarHome/NavbarHome'
import AboutUs from '../../Components/AboutUs/AboutUs'


export default function Index() {
  return (
    <>
      <NavbarHome />
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-700">
          <Landing />
          <LastCourses />
          <CourseComments />
          <CourseTeacher />
          <CourseServices />
          <Article />
          <AboutUs />
        </div>
      <Footer />
    </>
  )
}

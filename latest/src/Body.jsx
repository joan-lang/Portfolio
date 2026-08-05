import React from 'react'
import Mainbody from "./Mainbody";
import  Secondbody  from "./Secondbody";
import Aboutme from './Aboutme';
import Skill from './Skill';
import Projects from "./Projects";

const Body = () => {
  return (
   <>
      <Mainbody/>
           <Secondbody/>
           <Aboutme/>
           <Skill/>
           <Projects/>
   </>
  )
}

export default Body
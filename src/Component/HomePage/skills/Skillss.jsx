// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import { motion } from "framer-motion";
// import { useState } from 'react';
// import SectionTitle from '../../../helping_component/SectionTitle';



// const Skillss = () => {

//       const [currTab, setCurrTab] = useState('Web')
    

//     const Web = [ { tech: 'Javascript', range: '70' }, { tech: 'React', range: '90' }, { tech: 'Next.js', range: '70' },{ tech: 'TypeScript', range: '80' }, { tech: 'Firebase', range: '45' }, { tech: 'Express JS', range: '40' },{ tech: 'MongoDB', range: '40' },{ tech: 'HTML', range: '90' }, { tech: 'CSS', range: '85' }, { tech: 'Tailwind', range: '95' }, { tech: 'Bootstrap', range: '45' },]
//     const Tools = [{ tech: 'VS Code', range: '90' }, { tech: 'mongo DB Compass', range: '80' }, { tech: 'Git And Git Collaboration', range: '65' }, { tech: 'Postman', range: '75' }, { tech: 'Figma', range: '80' }, { tech: 'Photo shop', range: '35' }]
//     const Others = [{ tech: 'Team work', range: '98' }, { tech: 'Time Management', range: '95' }, { tech: 'Self Motivation', range: '100' }, { tech: 'Problem Solving', range: '70' }]
//     const tabs = ['Web', "Tools", "Others"] //for tab button
//     const tabPanels = [Web, Tools, Others] // for tabPanel
//       return (
//             <div className='my-container py-14' id='skills'>
//             <SectionTitle title={'skills'} subtitle={'Cutting-Edge Web Development Expertise'}></SectionTitle>
//             <Tabs className={'mt-10'}>

//                 <TabList className={'flex justify-center gap-12'}>
//                     {
//                         tabs.map((tab, ind) => {
//                             return <Tab key={ind}><motion.button onClick={() => { setCurrTab(tab) }}
//                                 whileHover={{ scale: 1.1, transition: { duration: .5 } }} whileTap={{ scale: 0.8 }} className={`${currTab === tab ? 'cmn-btn-one' : 'cmn-btn-one-outline'}`}> {tab}
//                             </motion.button></Tab>
//                         })
//                     }

//                 </TabList>

//                 <div className='mt-12 '>
//                     {tabPanels.map((tabPanel, ind) => {
//                         return <TabPanel key={ind}>
//                             <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-lg '>

//                                 {
//                                     tabPanel.map((skill, ind) =>
//                                         <div key={ind} className='bg-[#0cbca3] text-[#081229] py-6 px-8 rounded relative overflow-x-hidden z-20 shadow-inner shadow-[#15EBD1]'>
//                                             {skill.tech}
//                                             <motion.div
//                                                 variants={{
//                                                     hidden: { opacity: 0, width: 0 },
//                                                     visible: { opacity: 1, width: `${skill.range}%` }
//                                                 }}
//                                                 initial='hidden'
//                                                 whileInView='visible'
//                                                 transition={{ delay:.3, type: "spring", stiffness: 45 }}
//                                                 className={`absolute top-0 left-0 h-full -z-10 shadow bg-[#11F5D4]`} >

//                                              </motion.div>
//                                         </div>
//                                     )
//                                 }


//                             </div>
//                         </TabPanel>
//                     })}

//                 </div>

//             </Tabs>
//         </div>
//       );
// };

// export default Skillss;



// ------------------new----------------- 
// import image 
import js from "../../../assets/js.png";
import typeScript from "../../../assets/typeScript.png";
import reactl from "../../../assets/reactl.png";
import redux from "../../../assets/redux.png";
import nextjs from "../../../assets/nextjs.png";
import node from "../../../assets/node.png";
import express from "../../../assets/express-js.png";
import tailwind from "../../../assets/tailwind.png";
import mongodbLogo from "../../../assets/mongodb-logo.png";
import mongoose from "../../../assets/mongoose.png";
import html5 from "../../../assets/html5.png";
import css from "../../../assets/css.png";

import vscode from "../../../assets/vscode.png";
import git from "../../../assets/git.png";
import github from "../../../assets/git-hub.png";
import postman from "../../../assets/postman.png";
import mongodbCompass from "../../../assets/mongodb-compass.png";
import figma from "../../../assets/figma.png";


import SectionTitle from '../../../helping_component/SectionTitle';

const Skillss = () => {
    const skills = [
        { src: js, alt: "javascript" },
        { src: typeScript, alt: "typeScript" },
        { src: reactl, alt: "React" },
        { src: redux, alt: "Redux" },
        { src: nextjs, alt: "next.js" },
        { src: node, alt: "Node.js" },
        { src: express, alt: "Express" },
        { src: tailwind, alt: "Tailwind" },
        { src: mongodbLogo, alt: "Mongodb" },
        { src: mongoose, alt: "Mongoose" },
        { src: html5, alt: "Html" },
        { src: css, alt: "Css" },
      ];
      
      const tools = [
        { src: vscode, alt: "VS Code" },
        { src: git, alt: "git" },
        { src: github, alt: "github" },
        { src: postman, alt: "postman" },
        { src: mongodbCompass, alt: "MongoDB Compass" },
        { src: figma, alt: "figma" },
      ];
  return (
    <div className="my-container py-14" id="skills">
      <SectionTitle
        title={"skills"}
        subtitle={"Cutting-Edge Web Development Expertise"}
      ></SectionTitle>
      <div>
        
        <div className=" text-white py-10 px-5 lg:px-20">
          {/* Skills Section */}
          <div className="text-center mb-10">
            {/* <h2 className="text-2xl font-semibold">Skills</h2> */}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center items-center">
            {skills.map((skill) => (
              <img
                key={skill.alt}
                src={skill.src}
                alt={skill.alt}
                // width={84}
                // height={84}
                className="mx-auto rounded-full h-[100px] w-[100px] object-contain  "
              />
            ))}
          </div>

          {/* Tools Section */}
          <div className="text-center mt-16 mb-6">
            {/* <h2 className="text-2xl mt-8 font-semibold">Tools </h2> */}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center ">
            {tools.map((tool) => (
              <img
                key={tool.alt}
                src={tool.src}
                alt={tool.alt}
                // width={64}
                // height={64}
                className="mx-auto h-[100px] w-[100px] object-contain "
                
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillss;

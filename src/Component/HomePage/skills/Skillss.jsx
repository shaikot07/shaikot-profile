import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { motion } from "framer-motion";
import { useState } from 'react';
import SectionTitle from '../../../helping_component/SectionTitle';



const Skillss = () => {

      const [currTab, setCurrTab] = useState('Web')
    

    const Web = [ { tech: 'Javascript', range: '70' }, { tech: 'React', range: '90' }, { tech: 'Next.js', range: '70' },{ tech: 'TypeScript', range: '80' }, { tech: 'Firebase', range: '45' }, { tech: 'Express JS', range: '40' },{ tech: 'MongoDB', range: '40' },{ tech: 'HTML', range: '90' }, { tech: 'CSS', range: '85' }, { tech: 'Tailwind', range: '95' }, { tech: 'Bootstrap', range: '45' },]
    const Tools = [{ tech: 'VS Code', range: '90' }, { tech: 'mongo DB Compass', range: '80' }, { tech: 'Git', range: '65' }, { tech: 'Postman', range: '75' }, { tech: 'Figma', range: '80' }, { tech: 'Photo shop', range: '35' }]
    const Others = [{ tech: 'Team work', range: '98' }, { tech: 'Time Management', range: '95' }, { tech: 'Self Motivation', range: '100' }, { tech: 'Problem Solving', range: '70' }]
    const tabs = ['Web', "Tools", "Others"] //for tab button
    const tabPanels = [Web, Tools, Others] // for tabPanel
      return (
            <div className='my-container py-14' id='skills'>
            <SectionTitle title={'skills'} subtitle={'Cutting-Edge Web Development Expertise'}></SectionTitle>
            <Tabs className={'mt-10'}>

                <TabList className={'flex justify-center gap-12'}>
                    {
                        tabs.map((tab, ind) => {
                            return <Tab key={ind}><motion.button onClick={() => { setCurrTab(tab) }}
                                whileHover={{ scale: 1.1, transition: { duration: .5 } }} whileTap={{ scale: 0.8 }} className={`${currTab === tab ? 'cmn-btn-one' : 'cmn-btn-one-outline'}`}> {tab}
                            </motion.button></Tab>
                        })
                    }

                </TabList>

                <div className='mt-12 '>
                    {tabPanels.map((tabPanel, ind) => {
                        return <TabPanel key={ind}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-lg '>

                                {
                                    tabPanel.map((skill, ind) =>
                                        <div key={ind} className='bg-[#0cbca3] text-[#081229] py-6 px-8 rounded relative overflow-x-hidden z-20 shadow-inner shadow-[#15EBD1]'>
                                            {skill.tech}
                                            <motion.div
                                                variants={{
                                                    hidden: { opacity: 0, width: 0 },
                                                    visible: { opacity: 1, width: `${skill.range}%` }
                                                }}
                                                initial='hidden'
                                                whileInView='visible'
                                                transition={{ delay:.3, type: "spring", stiffness: 45 }}
                                                className={`absolute top-0 left-0 h-full -z-10 shadow bg-[#11F5D4]`} >

                                             </motion.div>
                                        </div>
                                    )
                                }


                            </div>
                        </TabPanel>
                    })}

                </div>

            </Tabs>
        </div>
      );
};

export default Skillss;
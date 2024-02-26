
import dailyPluse from '../../../assets/img/S-02.png'
import fitnessHome from '../../../assets/img/S-01.png'
import CarHub from '../../../assets/img/S-03.png'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import SectionTitle from '../../../helping_component/SectionTitle';


const Projects = () => {
      return (
            <div className='py-20 mb-12 my-container' id='projects'>
                {/* <Design></Design> */}
           <SectionTitle title={'projects'} subtitle={'Here you will find some of the personal and  projects that I created with each project containing its own case study'}></SectionTitle>
            <div className='space-y-36 mt-10'>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 150 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    whileInView= 'visible'
                    transition={{ type: 'spring', stiffness: 70 }}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <img src={dailyPluse} alt="" className='pointer-events-none' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='space-y-4'>
                                <h2 className='font-bold text-4xl'>Daily Pulse Newspaper</h2>
                                <p className='!mb-4 leading-8'>This is a Daily Pulse Newspaper website where you can find Daily news find jobs, read article, and sign up or sign in to more news Details. I used React for the client side and Firebase and Express for the server side in this project.</p>
                                <Link to={`/project/${1}`}><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className='cmn-btn-one'> Case Study </motion.button></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 150 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    whileInView= "visible"
                    transition={{ type: 'spring', stiffness: 70 }}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex items-center justify-center'>
                            <div className='space-y-4'>
                                <h2 className='font-bold text-4xl'>Fitnes HomE</h2>
                                <p className='!mb-4 leading-8'>Welcome to Fitnes Home, an responsive gym website where users can Explore gym features, contribute, and engage with a fitness home.</p>
                                <Link to={`/project/${2}`}><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className='cmn-btn-one'> Case Study </motion.button></Link>
                            </div>
                        </div>
                        <div>
                            <img src={fitnessHome} alt="" className='pointer-events-none' />
                        </div>
                        
                    </div>
                </motion.div>


                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 150 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    whileInView= "visible"
                    transition={{ type: 'spring', stiffness: 70 }}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <img src={CarHub} alt="" className='pointer-events-none' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='space-y-4'>
                                <h2 className='font-bold text-4xl'> Car Hub </h2>
                                <p className='!mb-4 leading-8'>Welcome to Car Hub , its a car selling website! This is a React-based project. here  client show different different brand car and knows car specification.</p>
                                <Link to={`/project/${3}`}><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className='cmn-btn-one'> Case Study </motion.button></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
      );
};

export default Projects;

import { TypeAnimation } from 'react-type-animation';
import bgImg from '../../../assets/img/Pt-Bg.jpg'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaFacebook, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import bannerLottie from '../../../../public/lottieAnimation/animation.json'
import Lottie from "lottie-react";

const Banner = () => {
      return (
            <div className="bg-cover bg-center text-white bg-fixed relative overflow-x-hidden bg-slate-900 bg-blend-overlay" style={{ backgroundImage: `url(${bgImg})` }}>

            <div className='h-screen grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5 lg:mx-10 items-center justify-center'>
                <div className='px-5 space-y-8'>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
                    >
                        <h2 className='font-bold text-3xl lg:text-4xl xl:text-5xl'>Hello, I'm <span className='text-[#15EBD1]'>Saiful Islam Shaikot</span></h2>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.7, type: "spring", stiffness: 70 }}
                    >
                        <p>
                            <TypeAnimation
                                sequence={[
                                    //  substring at the start will only be typed once, initially
                                    'A passionate Web Developer',
                                    1500,
                                    'A passionate Frontend Developer',
                                    1500,
                                    
                                ]}
                                speed={50}
                                // style={{ fontSize: '2em' }}
                                className='font-semibold text-lg lg:text-xl xl:text-2xl'
                                repeat={Infinity}
                            />
                        </p>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.8, type: "spring", stiffness: 70 }}
                    >
                        <Link to={'https://drive.google.com/uc?export=download&id=1OSAVTCJpPWk0nzlBNCFatPHA7BLV5f6e'} target="_blank"><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className={'cmn-btn-one'}> Resume <FaFileDownload className='inline' /></motion.button> </Link>
                    </motion.div>

                </div>


                <div className='hidden lg:block '>
                    <Lottie animationData={bannerLottie} className="flex justify-center items-center h-[400px] w-[600px]" loop={true} />
                </div>
            </div>

            {/* social icon */}
            <motion.div variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
            }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 100 }}
                className='w-auto h-auto flex flex-col gap-5 text-xl absolute right-5 top-1/2 -translate-x-1/2 bg-[#1F756A] p-3'
            >
                <Link className='inline-block transition hover:scale-125' to={'https://www.facebook.com/profile.php?id=100015322578979'} target='_blank'><FaFacebook></FaFacebook></Link>
                <Link className='inline-block transition hover:scale-125' to={'https://www.linkedin.com/in/saiful-islam-shaikot-8839ba181/'} target='_blank'><FaLinkedin></FaLinkedin></Link>
                <Link className='inline-block transition hover:scale-125' to={'https://github.com/shaikot07'} target='_blank'><FaGithub></FaGithub></Link>
            </motion.div>

        </div >
      );
};

export default Banner;
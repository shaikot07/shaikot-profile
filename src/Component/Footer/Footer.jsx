import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { delay, motion } from "framer-motion";

const Footer = () => {
      // handleToTopFunc
    const handleToTopFunc = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
  }
      return (
            <div className=" bg-slate-800 bg-opacity-50 relative z-50">
            <p className="py-12 text-center text-lg text-slate-300 w-5/6 md:w-4/6 lg:w-3/6 mx-auto">A heartfelt thank you for exploring my portfolio. Your time and attention are greatly appreciated. Feel free to reach out if you have any questions or would like to connect!</p>
            <motion.button onClick={handleToTopFunc}
                variants={{
                    hidden: { opacity: 0, scale: .8 },
                    visible: { opacity: 1, scale: 1 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: .5 }}

                 className='bg-[#1F756A] hover:bg-[#15EBD1] transition p-5 absolute -top-7 rounded-full  left-1/2 -translate-x-1/2'>
                <FaArrowUp></FaArrowUp>
                
            </motion.button>
        </div >
      );
};

export default Footer;
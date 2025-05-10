
// import About from "./About/About";
import AboutTow from "./About/AboutTow";
import Banner from "./Banner/Banner";
import CanHelp from "./CanHelp/CanHelp";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
// import Contact from "./contact/Contact";
// import Test from "./contact/Test";
import Skillss from "./skills/Skillss";


const HomePage = () => {
      return (
            <div className='overflow-x-hidden'>
                  <Banner></Banner>
                {/* <About></About> */}
                <AboutTow></AboutTow>
                <Skillss></Skillss>
                
                <Projects></Projects>
                <Education></Education>
                {/* <Test></Test> */}
                {/* <Contact></Contact> */}
                <CanHelp></CanHelp>
                  
                
            </div>
      );
};

export default HomePage;
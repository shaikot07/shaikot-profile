
import Banner from './Banner/Banner';
import About from './About/About';
import Skills from './skills/skills';
import Projects from './Projects/Projects';
import Contact from './contact/Contact';
import Test from './contact/test';


const HomePage = () => {
      return (
            <div>
                  
                  <Banner></Banner>
                  <About></About>
                  <Skills></Skills>
                  <Projects></Projects>
                  {/* <Contact></Contact> */}
                  <Test></Test>
            </div>
      );
};

export default HomePage;

import About from "./About/About";
import Banner from "./Banner/Banner";
import Projects from "./Projects/Projects";
import Test from "./contact/Test";
import Skillss from "./skills/Skillss";


const HomePage = () => {
      return (
            <div className='overflow-x-hidden'>
                  <Banner></Banner>
                <About></About>
                <Skillss></Skillss>
                <Projects></Projects>
                <Test></Test>
                  
                
            </div>
      );
};

export default HomePage;
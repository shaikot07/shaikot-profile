
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import NavBar_2 from '../Component/Navbar/NavBar_2';


const Layout = () => {
      return (
            <div className=''>
                  {/* <NavBar></NavBar> */}
                  <NavBar_2></NavBar_2>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Layout;
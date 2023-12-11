
import { Outlet } from 'react-router-dom';
import NavBar from '../Component/Navbar/NavBar';
import Footer from '../Component/Footer/Footer';

const Layout = () => {
      return (
            <div>
                  <NavBar></NavBar>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Layout;
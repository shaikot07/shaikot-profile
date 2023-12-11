
import { Outlet } from 'react-router-dom';
import NavBar from '../Component/Navbar/NavBar';

const Layout = () => {
      return (
            <div>
                  <NavBar></NavBar>
                  <Outlet></Outlet>
            </div>
      );
};

export default Layout;
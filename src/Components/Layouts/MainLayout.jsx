import { Outlet } from 'react-router-dom';
import Navbar from './../../Pages/Navbar/Navbar';

const MainLayout = () => {
  const background = {
    backgroundImage: `url(https://i.ibb.co/Hny4hgt/45473.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };
  return (
    <div
      style={background}
      className="md:max-w-[768px] max-w-[428px] lg:max-w-[1400px] mx-auto"
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

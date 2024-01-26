import { Outlet } from 'react-router-dom';
import Navbar from './../../Pages/Navbar/Navbar';
import '../Styles/webanimation.css';

const MainLayout = () => {
  const background = {
    backgroundImage: `url(https://i.ibb.co/2KwLR4L/Back.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };
  return (
    <div style={background} className="">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="md:max-w-[768px] max-w-[428px] lg:max-w-[1400px] mx-auto ">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

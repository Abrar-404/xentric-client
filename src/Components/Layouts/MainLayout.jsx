import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './../../Pages/Navbar/Navbar';
import '../Styles/webanimation.css';
import AnimatedCursor from 'react-animated-cursor';
import Spring from '../Spring/Spring';
import { useState } from 'react';

const MainLayout = () => {
  const location = useLocation();
  const [count, setCount] = useState(0);
  const background = {
    backgroundImage: `url(https://i.ibb.co/2KwLR4L/Back.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };
  return (
    <>
      <div
        style={background}
        className=""
        location={location}
        key={location.pathname}
      >
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)',
            backgroundColor: 'white',
          }}
          outerStyle={{
            border: '3px solid var(--cursor-color)',
            // borderRadius: '3px solid',
            // color: 'white',
          }}
        />
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
          <Spring key={count}></Spring>
        </div>
      </div>
    </>
  );
};

export default MainLayout;

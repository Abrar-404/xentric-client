import { Outlet } from 'react-router-dom';
import Navbar from './../../Pages/Navbar/Navbar';
import '../Styles/webanimation.css';
import AnimatedCursor from 'react-animated-cursor';

const MainLayout = () => {
  const background = {
    backgroundImage: `url(https://i.ibb.co/2KwLR4L/Back.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };
  return (
    <div style={background} className="">
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
      </div>
    </div>
  );
};

export default MainLayout;

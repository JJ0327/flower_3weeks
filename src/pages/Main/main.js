import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import NavBar from '../../component/Navbar/navigation';

import './main.css'


const main = () => {
  return(
    <>
    <NavBar/>
    <AwesomeSlider className="main" bullets={false} cssModule={AwesomeSliderStyles}>
      <div data-src="https://a-static.besthdwallpaper.com/jayeon-peopeul-ggoc-baegyeong-byeogji-11221_L.jpg"></div>
      <div data-src="https://i1.wp.com/sharehows.com/wp-content/uploads/2016/05/flower-festival-00.png?fit=800%2C400"></div>
      <div data-src="https://ojsfile.ohmynews.com/STD_IMG_FILE/2012/0601/IE001446705_STD.jpg"></div>
    </AwesomeSlider>
    </>
  );
};

export default main;
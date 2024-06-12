import React from 'react';
import as from '../assets/videos/2.mp4';

const Home: React.FC = () => {
  return (
    <div className=' h-max relative home'>
      <video  autoPlay muted loop >
        <source src={as} type="video/mp4"/>
       
      </video>
      <h1 className='absolute  z-1 lg:mt-[-25rem] lg:text-[150px]
       lg:ml-[400px]  mt-[-8rem] ml-[140px] text-4xl '>bLOG</h1>
    </div>
  );
};

export default Home;

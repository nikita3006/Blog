import React, { useState, useEffect } from 'react';
import CardDetails from './CardDetails';

interface Data {
  image: string;
  name: string;
  title: string;
  date: number;
}

const SelfCard: React.FC = () => {
  const [bgHeight, setBgHeight] = useState<string>('h-1');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setBgHeight('h-40'); // Adjust the height as needed
      } else {
        setBgHeight('h-1');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const data: Data[] = [
    {
      "image": "src/assets/Images/image1.jpg",
      "name": 'fdgdgfdfg',
      "title": 'lkuluilu;l;',
      "date": 1234154,
    },
    {
      "image": "src/assets/Images/image2.jpg",
      "name": 'fdgdfgdgfd',
      "title": 'ertertyetyert',
      "date": 789,
    },
    {
      "image": "src/assets/Images/image3.jpg",
      "name": 'dfgdfgdfg',
      "title": 'dfgdfgdfgdfgdgf',
      "date": 7896769,
    },
    {
      "image": "src/assets/Images/image4.jpg",
      "name": 'dfgdgfdgf',
      "title": 'dfgdfgdfgd',
      "date": 787896,
    }
  ];

  return (
    <div className='h-screen sections'>
      {/* image */}
      <div className=' '>
        <div className={`transition-[height] bg-red-500 delay-100 duration-1000 ease ${bgHeight}`}></div>
        {/* text */}
        <div className='lg:text-6xl text-4xl flex justify-center items-center mt-[-6rem]'>
          <h1>My bLOG</h1>
        </div>
      </div>
      {/* card */}
      <div className='mt-10 h-[82vh] relative'>
        <div className='absolute h-[400px] flex justify-center w-full '>
          {data.map((item, index) =>
            <CardDetails key={index} image={item.image} name={item.name} title={item.title} date={item.date} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfCard;
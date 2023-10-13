import React from 'react';

const LeftSection = () => {
  return (
    <div>
      <section className='bg-white mt-5 mb-2 rounded-xl text-sm border relative'>
        {/* <div className='h-12 w-[221px] bg-gray-200 absolute top-15 rounded-lg'></div> */}
        <div className='p-3 text-center z-10'>
          <img
            className='w-16 h-16 mx-auto border border-gray-400 rounded-full'
            src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
            alt='user'
          />

          <h3 className='font-semibold pt-2 text-base'>Dinesh</h3>
          <h5 className='text-xs text-gray-500'>
            React JS | Javascript | HTML5 | CSS3 | Bootstrap | Tailwind CSS
          </h5>
        </div>
        <hr />
        <div className=' p-3'>
          <h3>Analytics & Tools</h3>
          <h5 className='text-gray-500 text-xs'>68 post impressions</h5>
        </div>
        <hr />
        <div className=' p-3'>
          <h3 className='text-gray-500 text-xs'>
            Access exclusive tools & insights
          </h3>
          <h5 className='text-xs'>🟧 Get hired faster, try premium free</h5>
        </div>
        <hr />
        <div className=' p-3'>
          <h5 className=''>🎁 My items</h5>
        </div>
      </section>
      <section className='bg-white mt-0 rounded-lg text-xs p-3 border'>
        <h3 className='py-1'>Recent</h3>
        <div className='flex text-gray-500 py-1'>
          <img
            className='w-4 h-4 mr-2'
            src='https://cdn-icons-png.flaticon.com/512/2118/2118701.png'
            alt=''
          />
          <h3>React Developers</h3>
        </div>
        <div className='flex text-gray-500 py-1'>
          <img
            className='w-4 h-4 mr-2'
            src='https://cdn-icons-png.flaticon.com/512/2118/2118701.png'
            alt=''
          />
          <h3>CS50</h3>
        </div>
        <div className='flex text-gray-500 py-1'>
          <img
            className='w-4 h-4 mr-2'
            src='https://cdn-icons-png.flaticon.com/512/2118/2118701.png'
            alt=''
          />
          <h3>Javascript</h3>
        </div>
        <div className='flex text-gray-500 py-1'>
          <img
            className='w-4 h-4 mr-2'
            src='https://cdn-icons-png.flaticon.com/512/2118/2118701.png'
            alt=''
          />
          <h3>Frontend Development</h3>
        </div>
        <div className='flex text-gray-500 py-1'>
          <img
            className='w-4 h-4 mr-2'
            src='https://cdn-icons-png.flaticon.com/512/2118/2118701.png'
            alt=''
          />
          <h3>Redux</h3>
        </div>
      </section>
    </div>
  );
};

export default LeftSection;

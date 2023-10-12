import React from 'react';

const Main = () => {
  return (
    <div>
      <section className='bg-white sm:m-5 rounded-xl text-sm border relative my-5'>
        <div className='flex items-center p-4'>
          <img
            className='h-12 w-12 border border-gray-400 rounded-full'
            src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
            alt=''
          />
          <input
            className='ml-2 h-11 w-full border border-gray-400 rounded-full px-5'
            type='text'
            placeholder='Start a post'
          />
        </div>
      </section>
      <section className='bg-white sm:m-5 mb-2  rounded-xl text-sm border relative'>
        <div className='flex items-center px-4 pt-4'>
          <img
            className='h-11 w-11 border border-gray-400 rounded-full'
            src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
            alt=''
          />
          <div className='ml-2 text-xs text-gray-500'>
            <h3 className='font-semibold text-sm text-black'>Name</h3>

            <h5>Enigneer@Google</h5>
            <h5>3h ● Edited</h5>
          </div>
        </div>
        <article className='px-4 py-2'>
          Learning to code is a grind. What matters is that you stay positive,
          keep coding and trying new stuff.
        </article>
        <div className='border border-gray-200'>
          <img
            src='https://www.imaginarycloud.com/blog/content/images/size/w754/2022/07/nextjs-vs-react-2.jpg'
            alt=''
          />
        </div>
      </section>
      {/* <section className='bg-white m-5 mb-2 rounded-xl text-sm border relative'>
        <div className=' p-3'>
          <h3>Analytics & Tools</h3>
          <h5 className='text-gray-500 text-xs'>68 post impressions</h5>
        </div>
      </section> */}
    </div>
  );
};

export default Main;

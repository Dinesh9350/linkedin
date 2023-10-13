import React from 'react';

const Main = () => {
  return (
    <div>
      <section className='bg-white md:m-5 rounded-xl text-sm mt-2 sm:mt-5 border border-gray-300'>
        <div className='flex items-center p-4'>
          <img
            className='h-10 sm:h-12 w-10 sm:w-12 border border-gray-400 rounded-full'
            src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
            alt=''
          />
          <input
            className='ml-2 h-10 sm:h-12 w-full border border-gray-400 rounded-full px-5'
            type='text'
            placeholder='Start a post'
          />
        </div>
      </section>
      <section className='bg-white md:m-5 mt-2 rounded-xl text-sm border border-gray-300 relative'>
        <div className='flex items-center px-4 pt-4'>
          <img
            className='h-12 w-12 border border-gray-400 rounded-full'
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
        <div className=''>
          <img
            src='https://www.imaginarycloud.com/blog/content/images/size/w754/2022/07/nextjs-vs-react-2.jpg'
            alt=''
          />
        </div>
        <div className='flex ml-5 py-2'>
          <img
            className='z-0'
            src='https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
            alt='Like'
          />
          <img
            className='z-10'
            src='https://static.licdn.com/aero-v1/sc/h/cpho5fghnpme8epox8rdcds22'
            alt='love'
          />
          <img
            className='z-20'
            src='https://static.licdn.com/aero-v1/sc/h/lhxmwiwoag9qepsh4nc28zus'
            alt='insightful'
          />
        </div>
        <hr />
        <div className='flex justify-around items-center p-2 text-xs font-bold '>
          <div className='flex items-center'>
            <img
              className='w-5'
              src='https://www.pngall.com/wp-content/uploads/15/Like-Button-PNG-HD-Image.png'
              alt='like'
            />
            <span className='px-1'>Like</span>
          </div>
          <div className='flex items-center'>
            <img
              className='w-6'
              src='https://iconape.com/wp-content/png_logo_vector/comment-dots.png'
              alt='comments'
            />
            <span className='px-1'>Comments</span>
          </div>
          <div className='flex items-center'>
            <img
              className='w-7'
              src='https://www.svgrepo.com/show/334212/repost.svg'
              alt=''
            />
            <span className='px-1'>Repost</span>
          </div>
          <div className='flex items-center'>
            <img
              className='w-6'
              src='https://iconape.com/wp-content/files/xh/367685/png/367685.png'
              alt='send'
            />
            <span className='px-1'>Send</span>
          </div>
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

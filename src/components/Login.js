import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <nav className='flex justify-between items-center whitespace-nowrap m-2	xl:mx-20'>
        <div>
          <Link to='/'>
            <img
              className='w-28 sm:w-40 lg:mx-2'
              src='https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg'
              alt='login logo'
            />
          </Link>
        </div>
        <div className='flex'>
          <h3 className='text-lg px-5 font-light hidden sm:block'>Join now</h3>
          <Link to='/home'>
            <h3 className='text-lg text-blue-900 px-5 font-semibold border border-blue-900 rounded-full hover:bg-blue-100 transition'>
              Sign In
            </h3>
          </Link>
        </div>
      </nav>
      <section className='flex flex-wrap justify-center items-center m-auto lg:w-full'>
        <div className=''>
          <h3 className='text-blue-800 text-xl sm:text-3xl text-center p-5 '>
            Welcome to your professional community
          </h3>
          <Link to='/home'>
            <form
              className='flex justify-center items-center border border-gray-300 text-gray-700 mx-5 lg:mx-20 py-2 px-3 rounded-full cursor-pointer  transition hover:bg-gray-200'
              action=''
            >
              <img
                className='w-6'
                src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'
                alt=''
              />
              <h3 className='px-3'>Continue with Google</h3>
            </form>
          </Link>
        </div>
        <div className='p-10 md:w-1/2'>
          <img
            className='rounded-full mx-auto'
            src='https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4'
            alt=''
          />
        </div>
      </section>
    </div>
  );
};

export default Login;

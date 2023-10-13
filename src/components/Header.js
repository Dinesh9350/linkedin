import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className='flex justify-between items-center whitespace-nowrap m-2 sm:m-1 mx-2 sm:mx-5 md:mx-10 lg:mx-10 xl:mx-40 2xl:mx-48 '>
        <div className='flex'>
          <Link to='/'>
            <img
              className='w-8 lg:mx-2'
              src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
              alt='login logo'
            />
          </Link>
          <div className='relative'>
            <img
              className='w-4 h-4 absolute left-3 top-2 '
              src='https://cdn-icons-png.flaticon.com/512/3031/3031293.png'
              alt='search'
            />
            <input
              className='w-52 xl:w-64  h-8 rounded-md border pl-9 bg-slate-50 border-gray-200  hidden lg:block '
              type='text'
              placeholder='Search...'
            />
          </div>
        </div>
        <div className='flex justify-center items-center m-1 sm:ml-2 lg:pl-0 mx-auto sm:mx-0'>
          <Link to='/search' className='lg:hidden '>
            <div className='list-none flex flex-col items-center px-3 sm:px-5'>
              <img
                className='w-4 h-4'
                src='https://cdn-icons-png.flaticon.com/512/3031/3031293.png'
                alt='search'
              />
            </div>
          </Link>
          <Link to='/home'>
            <div className='list-none flex flex-col items-center px-3 sm:px-5'>
              <img className='w-6 h-6' src='/images/nav-home.svg' alt='home' />
              <span className='text-xs hidden sm:block'>Home</span>
            </div>
          </Link>
          <Link to='/home'>
            <div className='list-none flex flex-col items-center px-3 sm:px-5'>
              <img
                className='w-6 h-6'
                src='/images/nav-network.svg'
                alt='network'
              />
              <span className='text-xs hidden sm:block '>Network</span>
            </div>
          </Link>
          <Link to='/home'>
            <div className='list-none flex flex-col items-center px-3 sm:px-5'>
              <img className='w-6 h-6' src='/images/nav-jobs.svg' alt='home' />
              <span className='text-xs hidden sm:block '>Jobs</span>
            </div>
          </Link>
          <Link to='/home'>
            <div className='list-none flex flex-col items-center px-3 sm:px-5'>
              <img
                className='w-6 h-6'
                src='/images/nav-messaging.svg'
                alt='home'
              />
              <span className='text-xs hidden sm:block '>Messaging</span>
            </div>
          </Link>
          <Link to='/home'>
            <div className='list-none flex flex-col items-center px-2 sm:px-5'>
              <img
                className='w-6 h-6'
                src='/images/nav-notifications.svg'
                alt='home'
              />
              <span className='text-xs hidden sm:block '>Notifications</span>
            </div>
          </Link>
          <Link to='/home' className=''>
            <div className='list-none flex flex-col items-center px-2 sm:px-5'>
              <img
                className='w-6 h-6'
                src='https://www.kindpng.com/picc/m/10-104902_simple-user-icon-user-icon-white-png-transparent.png'
                alt='user'
              />
              <span className='flex'>
                <span className='text-xs hidden sm:inline '>Me</span>
                <img
                  className='hidden lg:inline'
                  src='/images/down-icon.svg'
                  alt='down logo'
                />
              </span>
            </div>
          </Link>
          <Link to='/home' className='hidden xl:block border-l-2'>
            <div className='list-none flex flex-col items-center justify-center px-2 sm:px-5'>
              <img className='w-6 h-6' src='/images/nav-work.svg' alt='home' />
              <span className='flex'>
                <span className='text-xs hidden sm:block '>Business</span>
                <img src='/images/down-icon.svg' alt='down logo' />
              </span>
            </div>
          </Link>
          <Link to='/premium' className='hidden 2xl:block'>
            <div className='text-xs text-red-800'>
              <h3>Get hired faster.</h3>
              <h3>Try Premium free</h3>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;

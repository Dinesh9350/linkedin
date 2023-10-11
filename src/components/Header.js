import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex sm:justify-between items-center whitespace-nowrap m-2 sm:m-1 mx-5 lg:mx-10 xl:mx-auto '>
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
      <div className='flex items-center justify-between ml-3 text-center'>
        <Link to='/search' className='lg:hidden '>
          <div className='list-none flex flex-col items-center justify-center px-2 sm:px-5'>
            <img
              className='w-4 h-4'
              src='https://cdn-icons-png.flaticon.com/512/3031/3031293.png'
              alt='search'
            />
          </div>
        </Link>
        <Link to='/home'>
          <div className='list-none flex flex-col items-center justify-center px-2 sm:px-5'>
            <img className='w-6 h-6' src='/images/nav-home.svg' alt='home' />
            <span className='text-xs hidden sm:block'>Home</span>
          </div>
        </Link>
        <Link to='/home'>
          <div className='list-none flex flex-col items-center justify-center px-2 sm:px-5'>
            <img className='w-6 h-6' src='/images/nav-network.svg' alt='home' />
            <span className='text-xs hidden sm:block '>Network</span>
          </div>
        </Link>
        <Link to='/home'>
          <div className='list-none flex flex-col items-center justify-center px-2 sm:px-5'>
            <img className='w-6 h-6' src='/images/nav-jobs.svg' alt='home' />
            <span className='text-xs hidden sm:block '>Jobs</span>
          </div>
        </Link>
        <Link to='/home'>
          <div className='list-none flex flex-col items-center justify-center px-2 sm:px-5'>
            <img
              className='w-6 h-6'
              src='/images/nav-messaging.svg'
              alt='home'
            />
            <span className='text-xs hidden sm:block '>Messaging</span>
          </div>
        </Link>
        <Link to='/home'>
          <div className='list-none flex flex-col items-center justify-center px-2 sm:px-5'>
            <img
              className='w-6 h-6'
              src='/images/nav-notifications.svg'
              alt='home'
            />
            <span className='text-xs hidden sm:block '>Notifications</span>
          </div>
        </Link>
        <Link to='/home'>
          <div className='list-none flex flex-col items-center justify-center px-2 sm:px-5'>
            <img className='w-6 h-6' src='/images/nav-home.svg' alt='home' />
            <span className='text-xs hidden sm:block '>Me</span>
          </div>
        </Link>
        <Link to='/home' className='hidden sm:block'>
          <div className='list-none flex flex-col items-center justify-center px-2 sm:px-5'>
            <img className='w-6 h-6' src='/images/nav-work.svg' alt='home' />
            <span className='text-xs hidden sm:block '>For Business</span>
          </div>
        </Link>
        <Link to='/premium' className='hidden sm:block'>
          <div className='text-xs text-red-800'>
            <h3>Get hired faster.</h3>
            <h3>Try Premium free</h3>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;

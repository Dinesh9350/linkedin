import React from 'react';
import Header from './Header';
import LeftSection from './LeftSection';
import Main from './Main';
import RightSection from './RightSection';

const Home = () => {
  return (
    <div>
      <Header />
      <section className='bg-zinc-100 grid md:grid-flow-col justify-stretch px-5 xl:px-48'>
        <div className='col-span-1 hidden md:block'>
          <LeftSection />
        </div>
        <div className='col-span-9'>
          <Main />
        </div>
        <div className='col-span-2 hidden lg:block'>
          <RightSection />
        </div>
      </section>
    </div>
  );
};

export default Home;

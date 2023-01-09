import React from 'react'
import SideBar from '../components/sidebar';

const AppLayout = (Component) => () => {
  return <div className='flex'>
    <div className='flex-none w-72 px-6 py-8'>
    <SideBar />
    </div>
    <div className='flex-1 bg-layout p-8 h-full overflow-scroll'>
    <Component />
    </div>
  </div>;
};

export default AppLayout;

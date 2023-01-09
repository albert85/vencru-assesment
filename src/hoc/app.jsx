import React from 'react';
import SideBar from '../components/sidebar';

const AppLayout = (Component) => () => {
  return (
    <div className="flex bg-layout">
      <div className="flex-none bg-white h-fit w-72 px-6 py-8 hidden lg:block">
          <SideBar />
      </div>
      <div className="flex-1 p-8 h-full overflow-scroll">
        <Component />
      </div>
    </div>
  );
};

export default AppLayout;

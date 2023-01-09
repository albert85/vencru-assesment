import React from 'react';
import { FooterItem, NavItem } from './mock';
import {ReactComponent as Girl} from '../../assets/girl.svg';

function SideBar(){

  const RenderNavigation = ({name, icon, notificationCount, active = false}) => {
    return (
      <div className={`flex justify-between mb-2 py-2 cursor-pointer ${active ? "bg-layout rounded-lg": ""}`}>
      <div className="flex items-center">
        <img src={icon} alt='icon' />
        <p className="ml-3 text-base">{name}</p>
      </div>
      {notificationCount && (<p className="rounded-2xl bg-layout px-2">{notificationCount}</p>)}
      </div>
    )
  }
 
  return (
  <div>
    <img src={require('../../assets/logo.png')} alt='logo' />
    <div className="relative border border-gray-500 mt-5 rounded-[8px] py-1 mb-6">
    <input placeholder='Search' className="outline-none ml-8 w-24 text-sm" />
    <img className="absolute top-2 left-2" src={require('../../assets/search.png')} alt='search' />
    </div>
    {
      React.Children.toArray(
        NavItem?.map((nav) => (
          <RenderNavigation {...nav} />
        ))
      )
    }
    <div className="mt-8 mb-8">
    {
      React.Children.toArray(
        FooterItem?.map((nav) => (
          <RenderNavigation {...nav} />
        ))
      )
    }
    </div>
    <div className="py-5 px-4 bg-layout rounded-lg">
      <p className="text-sm font-medium text-828">New features available!</p>
      <p className="text-sm text-085 font-normal">Check out the new dashboard view. Pages now load faster. </p>
      <Girl className="rounded-lg my-4" />
      <p className="text-sm text-085">Dismiss <span className="ml-3 text-sm text-1c6">What's new?</span></p>
    </div>

    <hr className="my-6" />
    <div className="flex items-center justify-between">
      <img src={require('../../assets/avatar.png')} alt="avatar" />
      <div className="ml-2">
        <p className="font-medium text-sm text-828">Olivia Rhye</p>
        <p className="text-sm text-085">olivia@untitledui.com</p>
      </div>
      <img src={require('../../assets/exit.png')} alt="exit" />
    </div>
  </div>
  );
}


export default SideBar
import React from 'react';
import AppLayout from '../hoc/app';
import { settingItem } from './mock';
import { ReactComponent as MailIcon } from '../assets/mail.svg';


function Settings (){

  const RenderSettingTab = ({ name, index }) => {
    return(
      <p className={`py-2 px-4 cursor-pointer ${index !== 0 ? "border-l-[1px] border-5DD" : ""}`}>{name}</p>
    )
  }

return (
  <div>
    <p className="text-3xl font-medium text-828">Settings</p>
    <p className="text-085 mb-6">Manage your team and preferences here.</p>
    <div className="rounded-lg border-5DD border-[1px] inline-flex mb-8">
      {
        React.Children.toArray(
          settingItem.map((item, index) => (
            <RenderSettingTab index={index} {...item} />
          ))
        )
      }

    </div>
    <p>Payment method</p>
    <p className="text-sm text-085">Update your billing details and address.</p>
    <hr className="mt-5" />
    <div className="grid grid-cols-3 py-5">
      <div className="col-span-1">
        <p className="text-sm text-054 font-medium">Contact email</p>
        <p className="text-sm text-085">Where should invoices be sent?</p>
      </div>
      <div className="col-span-2">
        <div className="flex items-start">
            <input type="radio" id="account-mail" name="mail" className="mt-1 mr-2 accent-6D9" />
          <div >
          <p className="text-054 text-sm font-medium m-0">Send to my account email</p>
          <p className="text-085 text-sm">olivia@untitledui.com</p>
          </div>
        </div>
        <div className="flex items-start mt-3">
            <input id="alt-mail" type="radio"  name="mail" className="mt-1 mr-2 accent-6D9" />
          <div >
          <p className="text-054 text-sm font-medium m-0">Send to an alternative email</p>
          <div className="bg-white border-[1px] py-1 px-7 w-60 relative">
            <input value="billing@untitledui.com" className="text-sm outline-none" />
            <MailIcon className="absolute top-1 left-1" />
          </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="mt-5" />
    <div className="grid grid-cols-3 py-5">
      <div className="col-span-1">
        <p className="text-sm text-054 font-medium">Card details</p>
        <p className="text-sm text-085">Select default payment method.</p>
      </div>
      <div className="col-span-2">
        <div className="p-4 flex items-start">
          <img src={require("../assets/visa.png")} alt="visa" />
          <div className="ml-2">
            <p>Visa ending in 1234</p>
            <p>Expiry 06/2024</p>
            <p>Set as default <span>Edit</span></p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
)
}

export default AppLayout(Settings)
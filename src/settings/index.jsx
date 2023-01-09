import React from 'react';
import AppLayout from '../hoc/app';
import { settingItem, tableData } from './mock';
import { ReactComponent as MailIcon } from '../assets/mail.svg';
import { ReactComponent as AddIcon } from '../assets/add.svg';
import { ReactComponent as DownloadIcon } from '../assets/download.svg';
import { ReactComponent as CheckIcon } from '../assets/checked.svg';
import { ReactComponent as ArrowDown } from '../assets/arrow-down.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';

function Settings() {
  const RenderSettingTab = ({ name, index }) => {
    return (
      <p
        className={`py-2 px-4 cursor-pointer ${
          index !== 0 ? 'border-l-[1px] border-5DD' : ''
        }`}
      >
        {name}
      </p>
    );
  };

  const RenderTableHeaderData = ({
    children,
    checked = false,
    sort = false,
    tdClass = ''
  }) => {
    return (
      <td className={`bg-layout px-6 py-4 ${tdClass}`}>
        <div className="flex items-center">
          {checked && <input type="checkbox" className="mr-2" />}
          <p className="font-medium text-xs text-085">{children}</p>
          {sort && <ArrowDown className="ml-1" />}
        </div>
      </td>
    );
  };

  const RenderTableData = ({ children, checked = false, tdClass }) => {
    return (
      <td className={`bg-white px-6 py-4 font-normal text-828 text-sm ${tdClass}`}>
        <div className="flex items-center">
        {checked && (<input type="checkbox" className="mr-2" />)}
          <p> {children} </p>
        </div>
      </td>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8 lg:hidden">
      <img src={require('../assets/logo.png')} alt='logo' />
      <MenuIcon className="cursor-pointer" />
      </div>
      <p className="text-3xl font-medium text-828">Settings</p>
      <p className="text-085 mb-6">Manage your team and preferences here.</p>
      <div className="w-full flex overflow-x-scroll mb-8">
      <div className="rounded-lg border-5DD border-[1px] inline-flex">
        {React.Children.toArray(
          settingItem.map((item, index) => (
            <RenderSettingTab index={index} {...item} />
          ))
        )}
      </div>
      </div>
      <p>Payment method</p>
      <p className="text-sm text-085">
        Update your billing details and address.
      </p>
      <hr className="mt-5" />
      <div className="grid grid-cols-3 py-5">
        <div className="col-span-3 lg:col-span-1 mb-3">
          <p className="text-sm text-054 font-medium">Contact email</p>
          <p className="text-sm text-085">Where should invoices be sent?</p>
        </div>
        <div className="col-span-3 lg:col-span-2">
          <div className="flex items-start">
            <input
              type="radio"
              id="account-mail"
              name="mail"
              className="mt-1 mr-2 accent-6D9"
            />
            <div>
              <p className="text-054 text-sm font-medium m-0">
                Send to my account email
              </p>
              <p className="text-085 text-sm">olivia@untitledui.com</p>
            </div>
          </div>
          <div className="flex items-start mt-3">
            <input
              id="alt-mail"
              type="radio"
              name="mail"
              className="mt-1 mr-2 accent-6D9"
            />
            <div>
              <p className="text-054 text-sm font-medium m-0">
                Send to an alternative email
              </p>
              <div className="bg-white border-[1px] py-1 px-7 w-80 mt-3 relative rounded-lg">
                <input
                  value="billing@untitledui.com"
                  className="text-sm outline-none"
                />
                <MailIcon className="absolute top-1 left-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="grid grid-cols-3 py-5 mb-8">
        <div className="col-span-3 lg:col-span-1 mb-3">
          <p className="text-sm text-054 font-medium">Card details</p>
          <p className="text-sm text-085">Select default payment method.</p>
        </div>
        <div className="col-span-3 lg:col-span-2">
          <div className="p-4 flex items-start bg-5FF rounded-lg border-[1px] relative w-full">
            <img src={require('../assets/visa.png')} alt="visa" />
            <div className="ml-2">
              <p className="text-sm font-medium text-89E">
                Visa ending in 1234
              </p>
              <p className="text-6D9 text-sm">Expiry 06/2024</p>
              <p className="text-7ED text-sm mt-2">
                Set as default{' '}
                <span className="text-1c6 font-medium ml-3">Edit</span>
              </p>
            </div>
            <CheckIcon className="absolute right-4" />
          </div>
          <div className="p-4 flex items-start bg-white rounded-lg border-[1px] mt-4  w-full">
            <img src={require('../assets/mastercard.png')} alt="visa" />
            <div className="ml-2">
              <p className="text-sm font-medium text-054">
                Mastercard ending in 1234
              </p>
              <p className="text-085 text-sm">Expiry 06/2024</p>
              <p className="text-085 text-sm mt-2 font-medium">
                Set as default{' '}
                <span className="text-1c6 font-medium ml-3">Edit</span>
              </p>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <AddIcon />
            <p className="text-sm font-medium text-085 ml-2">
              Add new payment method
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start mb-6 flex-col lg:flex-row lg:items-center lg:justify-between">
        <p className="text-lg font-medium">Billing history</p>
        <button className="flex items-center border-2 border-5DD py-3 px-4 rounded-lg shadow-btn">
          <DownloadIcon />
          <span className="ml-2">Download all</span>
        </button>
      </div>

      <table className="w-full shadow-table">
        <tr>
          <RenderTableHeaderData checked sort>Invoice</RenderTableHeaderData>
          <RenderTableHeaderData>Amount</RenderTableHeaderData>
          <RenderTableHeaderData tdClass="hidden lg:table-cell">Date</RenderTableHeaderData>
          <RenderTableHeaderData tdClass="hidden lg:table-cell">Status</RenderTableHeaderData>
          <RenderTableHeaderData tdClass="hidden lg:table-cell">Users on plan</RenderTableHeaderData>
          <RenderTableHeaderData tdClass="hidden lg:table-cell"></RenderTableHeaderData>
        </tr>
        {React.Children.toArray(
          tableData?.map((data) => (
            <tr className="border-t-[1px] border-t-CF0 bg-layout">
              <RenderTableData checked>{data.invoice}</RenderTableData>
              <RenderTableData>{data.amount}</RenderTableData>
              <RenderTableData tdClass="hidden lg:table-cell">{data.date}</RenderTableData>
              <RenderTableData tdClass="hidden lg:table-cell">{data.status}</RenderTableData>
              <RenderTableData tdClass="hidden lg:table-cell">{data.users}</RenderTableData>
              <RenderTableData tdClass="hidden lg:table-cell">
                <DownloadIcon />
              </RenderTableData>
            </tr>
          ))
        )}
      </table>
    </div>
  );
}

export default AppLayout(Settings);

import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { TbHeadphonesFilled } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { IoBatteryFullOutline } from "react-icons/io5";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

function NotificationBar({time}) {
  return (
    <div className=" pt-1 px-2 flex h-9 fixed top-0 w-screen md:w-96 bg-slate-900 justify-between">
      <div className='flex'>
        <span className='px-2 text-sm'>{time}</span>
        <IoLogoWhatsapp/>
        <TbHeadphonesFilled className='ml-1'/>
      </div>
      <div className='flex'>
          <FaWifi/>
          <MdOutlineSignalCellularAlt/>
          <IoBatteryFullOutline/>
        </div>
    </div>
  )
}

export default NotificationBar
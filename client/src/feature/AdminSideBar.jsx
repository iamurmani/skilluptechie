import React, { useState } from 'react';
import adminLogo from "../images/sidebarlogo.png";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { adminNavigationMenus } from '../utils/AdminNavigationMenus';

const AdminSideBar = () => {


  const [ visibleList, setVisibleList ] = useState(null);

  const toggleVisibility = (list) => {
    visibleList === list ? setVisibleList(null) : setVisibleList(list);
  };

  // const hideVisibility = () => setVisibleList(null);

  return (
    <div className='bg-[#121621] w-[110px] md:w-[317px] h-screen overflow-hidden overflow-y-scroll'>
       <div className='relative w-24 h-24 top-1 left-5'>
          <img src={adminLogo} loading='lazy' alt='logo' />
       </div>
       <div className='ml-3'>
         <h4 className='w-24 h-6 font-bold md:text-xl text-[#8A94A6] font-Inria'>Dashboard</h4>
         <div>
            <div className='flex gap-5 items-center mx-2 mr-4 rounded-lg p-4 mt-3 cursor-pointer hover:bg-[#635BFF] hover:duration-100 hover:scale-105 text-[#FFFFFF]'>
                <DashboardOutlinedIcon className='ml-1.5 md:ml-4 w-6 h-6' />
                <p className='w-20 h-6 font-medium -mt-1 text-lg font-Inria hidden md:block'>Overview</p>
            </div>
            <div className='flex gap-5 items-center mx-2 mr-4  rounded-lg p-4 mt-3 cursor-pointer hover:bg-[#635BFF] hover:duration-100 hover:scale-105 text-[#FFFFFF]'>
                <BarChartOutlinedIcon className='ml-1.5 md:ml-4 w-6 h-6' />
                <p className='w-20 h-6 font-medium -mt-1 text-lg font-Inria hidden md:block'>Analytics</p>
            </div>
         </div>
       </div>
       <div className='ml-3'>
         <h4 className='w-24  h-6 font-bold md:text-xl text-[#8A94A6] font-Inria'>General</h4>
         <div>
          {
            adminNavigationMenus.map((item) => (
          <div key={item.id}>
            <button className='flex justify-between ml-3 w-[60px] md:w-[270px] items-center mx-2 rounded-lg p-4 mt-3 cursor-pointer
             hover:bg-[#635BFF] hover:duration-100 hover:scale-105 text-[#FFFFFF]' onClick={() => toggleVisibility(item.mainButton)}>
                <div  className='flex gap-3 items-center'>
                   <span className='md:ml-4 w-6 h-6 -mt-1.5'>{item.mainButtonIcons}</span>
                   <p className='w-20 h-6 font-medium -mt-1 text-lg font-Inria text-start hidden md:block'>{item.mainButton}</p>
                </div>
                <span className={`w-4 h-4 -mt-3 hidden md:block 
                ${visibleList === "Question" ? "rotate-90 transition-all hover:duration-100 hover:scale-105" : "rotate-0"}`} 
                ><KeyboardArrowRightOutlinedIcon /></span>
            </button>
            {
              visibleList === item.mainButton && (
               <div className='md:ml-14 mt-1 flex items-center '>
                <div className='w-[2px] h-28 bg-[#8A94A6] hidden md:block'></div>
                <div className='md:w-full list-group'>
                  {
                    item.subMainButtons.map((button) => (
                    <div className='flex md:ml-3 md:mr-4 items-center rounded-lg p-1 md:p-3 md:mt-1 cursor-pointer
                    hover:bg-[#635BFF] hover:duration-100 hover:scale-105 text-[#FFFFFF]'>
                      <p className='md:w-16 h-6 font-medium md:ml-2 text-[12px] mt-1 md:text-base whitespace-nowrap font-Inria'>{button}</p>
                    </div>
                    ))
                  }
                </div>
              </div>
              )
            }
          </div>
            ))
          }
         </div>
       </div>
    </div>
  )
}

export default AdminSideBar
import React from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {

    const navigate=useNavigate();

    return (
    <div className='flex justify-between gap-2 mb-2'>
        {/* SEARCH BAR */}
        <div className='flex border border-gray-300 rounded-lg text-base-content'>
            <input type="search" placeholder=' Search... ' className=' flex-1 p-2' />
            <button type="button" className='p-1'>
                <SearchIcon />
            </button>
        </div>

        {/* ICONS */}
        <div className='flex gap-2'>
            {/* <button className='btn btn-primary rounded-full w-10'><NotificationsOutlinedIcon  /></button> */}
            <button className='btn btn-secondary rounded-full w-10' onClick={()=> navigate("/settings")}><SettingsOutlinedIcon /></button>
            {/* <button className='btn btn-accent rounded-full w-10'><PersonOutlinedIcon  /></button> */}
        </div>

      
    </div>
  )
}

export default Topbar;

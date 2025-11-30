import React, { useState } from 'react';
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import Boy from '../assets/assets';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

const Item = ({ title, to, selected, setSelected, icon })=>{
  return (  
    <MenuItem 
    active={selected === title}
    onClick={()=>setSelected(title)}
    icon={icon}
    >
      <Link to={to} >
        <h2>{title}</h2>
      </Link>
      
    </MenuItem>
  )
}

const ProSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected]=useState("Dashboard")

  return (

    <div className="min-h-screen bg-base-200 text-base-content border-r border-primary">
      <Sidebar collapsed={isCollapsed}>
        <Menu className='text-base-content bg-base-200'>
          <MenuItem className='font-bold text-2xl'
            icon={<MenuOutlinedIcon />}
            onClick={() => setIsCollapsed(!isCollapsed)}
          > Visibrum
          </MenuItem>

          <div className='flex flex-col justify-center items-center space-y-5'>
            <img src={Boy} alt="profile-pic" className='rounded-full w-[60%] border-4 border-accent-content' />
            <div className={`flex flex-col justify-center items-center ${isCollapsed ? "hidden" : "block" }`}>
              <h2 className='font-bold underline'>ADMIN</h2>
              <h3 className='text-cyan-600'>Administrator</h3> 
            </div>
            
          </div>

          <Item title="Dashboard" 
          icon={<HomeOutlinedIcon/>}
          to="/" 
          selected={selected}
          setSelected={setSelected}
          />

          <Item title="Calendar" 
          icon={<CalendarTodayOutlinedIcon/>}
          to="/calendar" 
          selected={selected}
          setSelected={setSelected}
          />

          <SubMenu className='bg-base-200 text-base-content'
           label="Charts" icon={<BarChartOutlinedIcon />}>

            {/* LINE CHARTS */}
            
           <SubMenu className='bg-base-200 text-base-content'
            label="Line Charts" icon={<TimelineOutlinedIcon />}>
              <Item title="Start Year Line" 
            icon={<TimelineOutlinedIcon/>}
            to="/start_year_line" 
            selected={selected}
            setSelected={setSelected}
            />
              <Item title="End Year Line" 
            icon={<TimelineOutlinedIcon/>}
            to="/end_year_line" 
            selected={selected}
            setSelected={setSelected}
            />
            </SubMenu>
          {/* PIE CHARTS */}
          <SubMenu className='bg-base-200 text-base-content'
            label="Pie Charts" icon={<PieChartOutlineOutlinedIcon />}>
              <Item title="Topic pie" 
            icon={<PieChartOutlineOutlinedIcon/>}
            to="/topic_pie" 
            selected={selected}
            setSelected={setSelected}
            />
            </SubMenu>
          {/* BAR CHARTS */}
            <SubMenu className='bg-base-200 text-base-content'
            label="Bar Charts" icon={<BarChartOutlinedIcon />}>
              <Item title=" Intensity Bar" 
            icon={<BarChartOutlinedIcon/>}
            to="/intensity_bar" 
            selected={selected}
            setSelected={setSelected}
            />
              <Item title="Likelihood Bar" 
            icon={<BarChartOutlinedIcon/>}
            to="/likelihood_bar" 
            selected={selected}
            setSelected={setSelected}
            />
              <Item title="Relevance Bar" 
            icon={<BarChartOutlinedIcon/>}
            to="/relevance_bar" 
            selected={selected}
            setSelected={setSelected}
            />
            </SubMenu>
          </SubMenu>

          {/* <Item title="Invoices" 
          icon={<ReceiptOutlinedIcon/>}
          to="/invoice" 
          selected={selected}
          setSelected={setSelected}
          /> */}

          <Item title="FAQ" 
          icon={<HelpOutlinedIcon/>}
          to="/faq" 
          selected={selected}
          setSelected={setSelected}
          />

          {/* <Item title="Contacts" 
          icon={<ContactsOutlinedIcon/>}
          to="/contacts" 
          selected={selected}
          setSelected={setSelected}
          /> */}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ProSidebar;

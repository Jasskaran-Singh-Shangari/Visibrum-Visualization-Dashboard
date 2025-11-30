import React from 'react'
import { Outlet } from 'react-router-dom'
import { useThemeStore } from "../store/useThemeStore.js"
import Topbar from '../components/Topbar.jsx';
import ProSidebar from '../components/ProSidebar.jsx';


const MainLayout = () => {
  const { theme } = useThemeStore();
  return (
    <div data-theme={theme} className="min-h-screen bg-base-100 text-base-content">
      <div className="flex min-h-screen">
      {/* Sidebar */}
      <ProSidebar />

      {/* Main Content */}
      <div className="flex-1 min-h-screen p-4">
        <Topbar />
        <Outlet />
      </div>
    </div>
      
    </div>
  )
}

export default MainLayout;

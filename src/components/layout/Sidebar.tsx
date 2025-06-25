import React from 'react';
// Import all the icons we'll need from react-icons
import { BiCompass, BiFile, BiGroup, BiBarChartAlt2, BiBookmark, BiPlusCircle, BiCog } from 'react-icons/bi';

// A small, reusable component for our icons
const SidebarIcon = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-card hover:bg-primary text-secondary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer group">
    {icon}
    <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
      {text}
    </span>
  </div>
);

export const Sidebar = () => {
  return (
    // Main sidebar container. Fixed position, full height.
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col bg-background text-white shadow-lg">
      
      {/* Top Section: Logo and Main Navigation */}
      <div className="flex-grow">
        {/* Logo Placeholder */}
        <div className="h-12 w-12 mt-3 mb-2 mx-auto flex items-center justify-center font-bold text-lg bg-card rounded-xl">
          CP
        </div>
        <hr className="border-t border-border-color w-10 mx-auto" />

        <SidebarIcon icon={<BiCompass size="28" />} text="Discover" />
        <SidebarIcon icon={<BiFile size="28" />} text="Trending 🔥" />
        <SidebarIcon icon={<BiGroup size="28" />} text="Community" />
        <SidebarIcon icon={<BiBarChartAlt2 size="28" />} text="Stats" />
        <SidebarIcon icon={<BiBookmark size="28" />} text="Bookmarks" />
      </div>

      {/* Bottom Section: Actions and User Profile */}
      <div className="mb-4">
        <SidebarIcon icon={<BiPlusCircle size="28" />} text="Add Idea" />
        <SidebarIcon icon={<BiCog size="28" />} text="Settings" />
        {/* User Avatar Placeholder */}
        <div className="mt-2 mx-auto flex items-center justify-center">
          <img 
            src="https://i.pravatar.cc/150?u=currentuser" 
            alt="User Avatar" 
            className="h-12 w-12 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
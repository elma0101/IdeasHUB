import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

// This component takes 'children' as a prop.
// 'children' is a special React prop that lets you pass components into other components.
interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex bg-background min-h-screen text-white">
      {/* The Sidebar is always present */}
      <Sidebar />
      
      {/* Main content area that takes up the rest of the space */}
      {/* We add a left margin equal to the sidebar's width (w-20 -> 5rem) */}
      <div className="flex-1 ml-20 flex flex-col">
        <TopBar />
        
        {/* The 'children' will be rendered here. This is where our IdeaFeed will go. */}
        <main className="p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
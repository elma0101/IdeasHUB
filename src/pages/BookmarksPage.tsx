import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiBell } from 'react-icons/bi';

// Header component matching the design
const BookmarksPageHeader = () => (
  <header className="flex justify-between items-center p-6 border-b border-gray-700">
    <div className="flex items-center gap-8">
    <h1 className="text-xl font-bold text-white">
      <Link to="/" className="hover:text-white transition-colors">IdeasHub</Link>
    </h1>
      <nav className="flex items-center gap-8">
        <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
        <Link to="#" className="text-gray-400 hover:text-white transition-colors">Explore</Link>
        <Link to="/create" className="text-gray-400 hover:text-white transition-colors">Create</Link>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative">
        <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-gray-500 w-64"
        />
      </div>
      <BiBell className="text-gray-400 hover:text-white cursor-pointer" size={24} />
      <Link to="/profile">
        <img 
          src="https://i.pravatar.cc/150?u=currentuser" 
          alt="User Avatar" 
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </Link>
    </div>
  </header>
);

// Mock bookmarked ideas matching the design
const bookmarkedIdeas = [
  {
    id: "1",
    title: "Sustainable Living Ideas",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000",
  },
  {
    id: "2",
    title: "Tech Innovations for Education",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2000",
  },
  {
    id: "3",
    title: "Creative Writing Prompts",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2000",
  },
  {
    id: "4",
    title: "DIY Home Decor Projects",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000",
  },
  {
    id: "5",
    title: "Healthy Recipe Ideas",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000",
  },
  {
    id: "6",
    title: "Travel Destination Inspiration",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2000",
  }
];

export const BookmarksPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <BookmarksPageHeader />
      
      <main className="max-w-7xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-white mb-12">Bookmarks</h2>
        
        {/* Bookmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bookmarkedIdeas.map((idea) => (
            <Link 
              key={idea.id}
              to={`/project/${idea.id}`}
              className="group bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-200 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={idea.imageUrl} 
                  alt={idea.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium text-sm leading-tight">{idea.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State (shown when no bookmarks) */}
        {bookmarkedIdeas.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 text-6xl mb-4">📚</div>
            <h3 className="text-xl font-medium text-gray-400 mb-2">No bookmarks yet</h3>
            <p className="text-gray-500 mb-6">Start bookmarking ideas you love to see them here</p>
            <Link 
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Explore Ideas
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}; 
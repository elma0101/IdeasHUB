import React from 'react';
import { Link } from 'react-router-dom';

// Header component similar to your existing pages but with profile-specific navigation
const ProfilePageHeader = () => (
  <header className="flex justify-between items-center p-6 border-b border-gray-700">
    <h1 className="text-xl font-bold text-white">
      <Link to="/" className="hover:text-white transition-colors">IdeasHub</Link>
    </h1>
    <nav className="flex items-center gap-6">
      <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
      <Link to="#" className="text-gray-400 hover:text-white transition-colors">Explore</Link>
      <Link to="#" className="text-gray-400 hover:text-white transition-colors">Notifications</Link>
      <Link to="#" className="text-gray-400 hover:text-white transition-colors">Messages</Link>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-gray-500 w-64"
          />
        </div>
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
      </div>
    </nav>
  </header>
);

// Mock data for user profile
const profileData = {
  name: "Sophia Bennett",
  username: "@sophia.b",
  bio: "Software Engineer | Innovator | Dreamer",
  avatarUrl: "https://i.pravatar.cc/150?u=sophia",
  stats: {
    posts: 120,
    followers: 350,
    following: 78
  }
};

// Mock data for user's ideas
const userIdeas = [
  {
    id: "p1",
    title: "AI-Powered Personal Assistant",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
  },
  {
    id: "p2", 
    title: "Sustainable Energy Solutions",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000",
  },
  {
    id: "p3",
    title: "Smart Home Automation System", 
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000",
  },
  {
    id: "p4",
    title: "Virtual Reality Education Platform",
    imageUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?q=80&w=2000",
  },
  {
    id: "p5",
    title: "Personalized Healthcare App",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2000",
  },
  {
    id: "p6",
    title: "Community Collaboration Platform",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
  }
];

export const ProfilePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ProfilePageHeader />
      
      <main className="max-w-5xl mx-auto p-8">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img 
              src={profileData.avatarUrl} 
              alt={profileData.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700"
            />
            <h2 className="text-3xl font-bold text-white mb-2">{profileData.name}</h2>
            <p className="text-gray-400 text-lg mb-2">{profileData.username}</p>
            <p className="text-gray-300 mb-6">{profileData.bio}</p>
            
            <div className="flex gap-4 justify-center">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Follow
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Message
              </button>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center bg-gray-800 rounded-lg p-6 min-w-[120px]">
              <div className="text-2xl font-bold text-white">{profileData.stats.posts}</div>
              <div className="text-gray-400 text-sm">Posts</div>
            </div>
            <div className="text-center bg-gray-800 rounded-lg p-6 min-w-[120px]">
              <div className="text-2xl font-bold text-white">{profileData.stats.followers}</div>
              <div className="text-gray-400 text-sm">Followers</div>
            </div>
            <div className="text-center bg-gray-800 rounded-lg p-6 min-w-[120px]">
              <div className="text-2xl font-bold text-white">{profileData.stats.following}</div>
              <div className="text-gray-400 text-sm">Following</div>
            </div>
          </div>
        </div>

        {/* Ideas Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Ideas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userIdeas.map((idea) => (
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
                  <h4 className="text-white font-medium text-sm leading-tight">{idea.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}; 
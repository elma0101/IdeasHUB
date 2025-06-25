
import { useParams } from 'react-router-dom';
import { mockFeedItems } from '../lib/mockData';
import { BiLogoTwitter, BiLogoGithub, BiLink } from 'react-icons/bi';

// A simple header for this page
const DetailPageHeader = () => (
  <header className="flex justify-between items-center p-6 border-b border-gray-700">
    <h1 className="text-xl font-bold">IdeasHub</h1>
    <nav className="flex items-center gap-6">
      <a href="#" className="hover:text-white">Home</a>
      <a href="#" className="hover:text-white">Explore</a>
      <a href="#" className="bg-white text-black font-semibold px-4 py-2 rounded-md">Create</a>
      <div className="w-8 h-8 bg-gray-600 rounded-full"></div> {/* Placeholder for user avatar */}
    </nav>
  </header>
);

export const ProjectDetailPage = () => {
  // Get the 'id' from the URL, e.g., "/project/1" -> id is "1"
  const { id } = useParams();
  
  // Find the project data from our mock array
  const project = mockFeedItems.find(
    (item) => item.type === 'idea' && item.data.id === id
  );

  if (!project || project.type !== 'idea') {
    return <div>Project not found!</div>;
  }

  const { data } = project;

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <DetailPageHeader />
      <main className="max-w-4xl mx-auto p-8">
        {/* Top Section */}
        <section>
          <h2 className="text-3xl font-bold text-white">Project Details</h2>
          <p className="mt-2">Explore the intricacies of this innovative project, its creators, and contributors.</p>
          <div className="mt-8 flex gap-8 items-center bg-gray-800 p-6 rounded-lg">
            <img src={data.imageUrl} alt={data.title} className="w-1/3 h-auto rounded-md object-cover" />
            <div>
              <h3 className="text-2xl font-bold text-white">{data.title}</h3>
              <p className="mt-2">{data.description}</p>
              <p className="mt-4 text-sm">Created by {data.author.name}</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-white">About the Project</h3>
          <p className="mt-4 leading-relaxed">
            This project leverages cutting-edge AI technology to generate unique and captivating artwork from simple text descriptions. Users can experiment with various styles and parameters to create personalized art pieces.
          </p>
        </section>

        {/* Author Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-white">Author</h3>
          <div className="mt-4 flex items-center gap-6">
            <img src={data.author.avatarUrl} alt={data.author.name} className="w-24 h-24 rounded-full" />
            <div>
              <h4 className="text-xl font-semibold text-white">{data.author.name}</h4>
              <p>AI Researcher & Artist</p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white"><BiLogoTwitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><BiLogoGithub size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><BiLink size={20} /></a>
              </div>
            </div>
          </div>
        </section>
        
        {/* ... More sections like Contributors, Repository would go here ... */}
      </main>
    </div>
  );
};
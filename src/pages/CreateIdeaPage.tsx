import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import type { FeedItem } from '../lib/mockData';
import { Link } from 'react-router-dom';

// --- PROPS ---
interface CreateIdeaPageProps {
  onFormSubmit: (ideaData: any) => void;
  items?: FeedItem[];
  isEditMode: boolean;
}

// --- HEADER COMPONENT (UNCHANGED) ---
const CreatePageHeader = () => (
    <header className="flex justify-between items-center p-6 border-b border-gray-700 absolute top-0 left-0 right-0">
      <h1 className="text-xl font-bold text-white"><Link to="/" className="hover:text-white transition-colors">ideasHub</Link></h1>
      <nav className="flex items-center gap-6">
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white">?</div>
        <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
      </nav>
    </header>
  );

// --- REUSABLE FORM COMPONENTS (UNCHANGED) ---
const FormInput = ({ label, ...props }: { label: string, [key: string]: any }) => (
  <div>
    <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
    <input
      {...props}
      className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
    />
  </div>
);

const FormTextarea = ({ label, ...props }: { label: string, [key: string]: any }) => (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <textarea
        {...props}
        rows={4}
        className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
      />
    </div>
  );


// --- MAIN PAGE COMPONENT (CORRECTED) ---
export const CreateIdeaPage: React.FC<CreateIdeaPageProps> = ({ onFormSubmit, items = [], isEditMode }) => {
  const { id } = useParams();
   

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (isEditMode && id) {
      const projectToEdit = items.find(
        (item) => item.type === 'idea' && item.data.id === id
      );

      if (projectToEdit && projectToEdit.type === 'idea') {
        const { data } = projectToEdit;
        setTitle(data.title);
        setDescription(data.description);
        setImageUrl(data.imageUrl);
        setTags(data.tags.map(tag => tag.replace('#', '')).join(', '));
      }
    }
  }, [id, isEditMode, items]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim()) {
      alert('Title is required!');
      return;
    }

    const commonData = {
      title,
      description,
      imageUrl,
      tags: tags.split(',').map(tag => `#${tag.trim().replace('#', '')}`),
    };

    if (isEditMode) {
      const originalProject = items.find(item => item.type === 'idea' && item.data.id === id);
      onFormSubmit({
        ...originalProject?.data,
        ...commonData,
        id: Number(id),
      });
    } else {
      onFormSubmit({
        ...commonData,
        author: { name: 'CurrentUser', level: 1, avatarUrl: 'https://i.pravatar.cc/150?u=currentuser' },
        stats: { likes: 0, comments: 0, forks: 0 },
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        readTime: '1m read',
        resources: [],
      });
    }
  };

  return (
    <div className="bg-background text-white min-h-screen flex items-center justify-center">
      <CreatePageHeader />
      <div className="w-full max-w-2xl px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          {isEditMode ? 'Edit your idea' : 'Create an idea'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* --- THIS IS THE SECTION THAT WAS MISSING --- */}
          <FormInput label="Title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} placeholder="e.g., AI Powered Recipe Generator" required />
          <FormTextarea label="Description" value={description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} placeholder="Describe your project idea in a few sentences." required />
          <FormInput label="Tags (comma-separated)" value={tags} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)} placeholder="e.g., ai, webapp, foodtech" />
          <FormInput label="Cover Image URL" value={imageUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)} placeholder="https://images.unsplash.com/..." />
          {/* --- END OF MISSING SECTION --- */}
          
          <button
            type="submit"
            className="w-full text-white bg-primary hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors"
          >
            {isEditMode ? 'Save Changes' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
};
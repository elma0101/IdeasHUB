import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { IdeaFeed } from './components/idea/IdeaFeed';
import { MainLayout } from './components/layout/MainLayout';
import { mockFeedItems } from './lib/mockData';
import type { FeedItem } from './lib/mockData';
import type { IdeaCardProps } from './components/idea/IdeaCard';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { CreateIdeaPage } from './pages/CreateIdeaPage';
import { ProfilePage } from './pages/ProfilePage';
import { BookmarksPage } from './pages/BookmarksPage';




function App() {
  // The master list of all feed items is now held in state here.
  const [feedItems, setFeedItems] = useState<FeedItem[]>(mockFeedItems);
  const navigate = useNavigate();

  // --- NEW FUNCTION TO HANDLE UPDATES ---
  const handleUpdateIdea = (updatedIdeaData: IdeaCardProps) => {
    setFeedItems(feedItems.map(item => {
      if (item.type === 'idea' && item.data.id === updatedIdeaData.id) {
        // This is the item we want to update. Return a new object.
        return { ...item, data: updatedIdeaData };
      }
      // Otherwise, return the item unchanged.
      return item;
    }));
    // Navigate back to the detail page after editing
    navigate(`/project/${updatedIdeaData.id}`);
  };


  // This function will be passed down to the CreateIdeaPage.
  // It knows how to add a new idea to our state.
  const handleAddIdea = (newIdeaData: Omit<IdeaCardProps, 'id'>) => {
    // 1. Generate a unique ID.
    // We find the highest existing ID and add 1.
    const newId = (Math.max(
      ...feedItems
        .filter(item => item.type === 'idea')
        .map(item => Number((item.data as IdeaCardProps).id))
        .filter(id => !isNaN(id)),
      0
    ) + 1).toString();

    const newIdea: FeedItem = {
      type: 'idea',
      data: {
        ...newIdeaData,
        id: newId, // 2. Add the new ID to the data
      } as IdeaCardProps,
    };

    // 3. Add the new idea to the state
    setFeedItems([newIdea, ...feedItems]);

    // 4. Navigate to the discover page
    navigate('/');
  };

  return (
    <Routes>
      {/* Main Dashboard Route */}
      <Route
        path="/"
        element={
          <MainLayout>
            {/* Pass the state down to the feed */}
            <IdeaFeed items={feedItems} />
          </MainLayout>
        }
      />

      {/* Project Detail Route */}
      <Route path="/project/:id" element={<ProjectDetailPage items={feedItems} />} />

      {/* --- NEW ROUTE --- */}
      {/* Create Idea Route */}
      <Route
        path="/create"
        element={
          // Pass the handleAddIdea function down to the create page
          <CreateIdeaPage onFormSubmit={handleAddIdea} isEditMode={false} />
        }
      />

      {/* --- NEW EDIT ROUTE --- */}
      <Route 
        path="/project/:id/edit" 
        element={<CreateIdeaPage onFormSubmit={handleUpdateIdea} items={feedItems} isEditMode={true} />}
      />

      {/* Profile Route */}
      <Route path="/profile" element={<ProfilePage />} />

      {/* Bookmarks Route */}
      <Route path="/bookmarks" element={<BookmarksPage />} />
    </Routes>
  );
}

export default App;
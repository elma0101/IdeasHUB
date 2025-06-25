import { IdeaFeed } from './components/idea/IdeaFeed';
import { MainLayout } from './components/layout/MainLayout';
import { mockFeedItems } from './lib/mockData';
import { Routes, Route } from 'react-router-dom';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

function App() {
  console.log("mockFeedItems:", mockFeedItems); // Debug log
  
  return (
    <Routes>
      {/* Route for the main dashboard */}
      <Route 
        path="/" 
        element={
          <MainLayout>
            <IdeaFeed items={mockFeedItems} />
          </MainLayout>
        } 
      />
      
      {/* Route for the project detail page */}
      <Route path="/project/:id" element={<ProjectDetailPage />} />
    </Routes>
  );
}

export default App;
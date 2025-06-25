import { IdeaFeed} from './components/idea/IdeaFeed';
import { MainLayout } from './components/layout/MainLayout';
import { mockFeedItems } from './lib/mockData';



function App() {
  return (
   <div className='bg-background min-h-screen'>
    <MainLayout>
      <IdeaFeed items={mockFeedItems} />
    </MainLayout>
   </div>
  );
}

export default App;
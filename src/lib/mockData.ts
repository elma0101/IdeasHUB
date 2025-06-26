import type { IdeaCardProps } from '../components/idea/IdeaCard';
import type { PromotedCardProps } from '../components/idea/PromotedCard';



// Define a type for a single item in our feed.
// It's either an 'idea' with IdeaCardProps, or a 'promo' with PromotedCardProps.
export type FeedItem =
  | { type: 'idea'; data: IdeaCardProps }
  | { type: 'promo'; data: Omit<PromotedCardProps, 'onRemove'> }; // Omit onRemove for mock data

// Mock data for the Promoted Card
const promotedItem: FeedItem = {
  type: 'promo',
  data: {
    companyName: 'Hostman',
    companyLogoUrl: 'https://i.imgur.com/3Q2XfE5.png', // Placeholder logo
    headline: 'Your Project Deserves the Best Hosting!',
    description: 'Hostman powers your project from idea to production. Promo FIRST10 for 10% off on all services.',
    imageUrl: 'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070', // Placeholder for the hosting box image
    ctaText: 'Try It Now',
    ctaUrl: '#', // The link would go here
  },
};


const ideaItems: FeedItem[] = [

    {
    type: 'idea',
    data:{
        id: "1",
        title: "AI powered recipe generator",
        author: {name: "CreativeCoder",level: 8, avatarUrl: "https://i.pravatar.cc/150?u=creativecoder"},
        description: 'An app that suggests recipes based on ingredients you have, using AI to understand dietary restrictions and preferences. Users can like, share, and even try to build their own versions.',  
        tags: ['#ai','#foodtech','mobile app'],
        imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070',
        stats :{likes:120 , comments: 32 ,forks: 7},
        date: 'May 30 , 2025',
        readTime: '11m read',  
    },
    },

    {
    type: 'idea',
    data:{
        id: "2",
        title: "Collaborative story writing platform",
        author: {name: "StorySpinner",level: 3, avatarUrl: "https://i.pravatar.cc/150?u=storyspinner"},
        description: 'A website where users can start a story and others can contribute paragraphs or chapters , Implement version control for different story branches and a voting system for the best contributions.',  
        tags: ['#writing','#collaboration','webapp'],
        imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1976',
        stats :{likes:95 , comments: 18,forks: 4},
        date: 'May 28 , 2025',
        readTime: '8m read',  
    },
    },

    {
    type: 'idea',
    data:{
        id: "3",
        title: "Local Event Finder app with AR features",
        author: {name: "ARExplorer",level: 12, avatarUrl: "https://i.pravatar.cc/150?u=arexplorer"},
        description: 'A mobile app that helps users discover local events (concerts , meetups , workshops) and uses Augmented Reality to show event details when pointing the camera at venues.',  
        tags: ['#AR','#localisation','meetups'],
        imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stats :{likes:110 , comments: 20,forks: 2},
        date: 'Jul 5 , 2025',
        readTime: '12m read',  
    },
    },

];

const allItems = [...ideaItems];
allItems.splice(2, 0, promotedItem); 

export const mockFeedItems: FeedItem[] = allItems;
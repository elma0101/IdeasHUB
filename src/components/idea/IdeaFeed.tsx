import React from 'react';
import type  { FeedItem } from '../../lib/mockData'; // Import our new union type
import { IdeaCard } from './ideaCard';
import { PromotedCard } from './PromotedCard';

interface IdeaFeedProps {
  items: FeedItem[];
}

export const IdeaFeed: React.FC<IdeaFeedProps> = ({ items }) => {
  const handleRemovePromo = (index: number) => {
    // In a real app, you would update the state to remove the item.
    // For now, we'll just log it to the console.
    console.log(`Remove promo card at index: ${index}`);
    alert('Promo card removed! (Check console). In a real app, this would disappear.');
  };

  return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => {
        // --- FIX: Make sure this logic is in place to render BOTH card types ---
        switch (item.type) {
          case 'idea':
            return <IdeaCard key={`idea-${index}`} {...item.data} />;
          case 'promo':
            // The PromotedCard needs to span 2 columns to look right in a 3-column layout
            return (
               
                <PromotedCard
                  key={`promo-${index}`}
                  {...item.data}
                  onRemove={() => console.log('Remove promo')}
                />
              
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
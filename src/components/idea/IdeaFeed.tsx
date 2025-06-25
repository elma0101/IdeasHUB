import React, { useState } from 'react';
import type  { FeedItem } from '../../lib/mockData'; // Import our new union type
import { IdeaCard } from './IdeaCard';
import { PromotedCard } from './PromotedCard';

interface IdeaFeedProps {
  items: FeedItem[];
}

export const IdeaFeed: React.FC<IdeaFeedProps> = ({ items }) => {
  // State to manage the current items in the feed
  const [feedItems, setFeedItems] = useState<FeedItem[]>(items);

  // Function to remove an item from the feed
  const handleRemoveItem = (indexToRemove: number) => {
    setFeedItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {feedItems.map((item, index) => {
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
                  onRemove={() => handleRemoveItem(index)}
                />
              
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
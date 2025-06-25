import React from 'react';
// Using BiRefresh for the "Remove" icon, suggesting you can refresh/remove the ad.
import { BiRefresh } from 'react-icons/bi';

// Define the props for our promotional card
export interface PromotedCardProps {
  companyName: string;
  companyLogoUrl: string;
  headline: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaUrl: string;
  onRemove: () => void; // A function to handle the remove action
}

export const PromotedCard: React.FC<PromotedCardProps> = ({
  companyName,
  companyLogoUrl,
  headline,
  description,
  imageUrl,
  ctaText,
  ctaUrl,
  onRemove,
}) => {
  return (
    // Main container with a distinct blue background
    <div className="bg-primary text-white rounded-lg p-6 flex flex-col gap-4 max-w-md mx-auto">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
          Promoted
        </span>
        <div className="flex items-center gap-2">
          <img src={companyLogoUrl} alt={`${companyName} logo`} className="w-6 h-6 rounded-md" />
          <span className="font-semibold">{companyName}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">{headline}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Image Container */}
      <div className="bg-white/10 p-4 rounded-lg mt-2">
        <img src={imageUrl} alt="Promotion" className="w-full h-auto rounded-md object-contain" />
      </div>

      {/* Footer Actions */}
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={onRemove} 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <BiRefresh size={20} />
          <span>Remove</span>
        </button>
        <a 
          href={ctaUrl}
          target="_blank" // Open in new tab
          rel="noopener noreferrer"
          className="bg-white text-primary font-bold py-2 px-5 rounded-md hover:bg-gray-200 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};
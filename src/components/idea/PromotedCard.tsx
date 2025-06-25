import React, { useState } from 'react';
// Using BiRefresh for the "Remove" icon, suggesting you can refresh/remove the ad.
import { BiRefresh, BiX } from 'react-icons/bi';

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
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveClick = () => {
    setShowConfirmation(true);
  };

  const confirmRemove = () => {
    setIsRemoving(true);
    // Add a small delay for animation effect
    setTimeout(() => {
      onRemove();
    }, 300);
  };

  const cancelRemove = () => {
    setShowConfirmation(false);
  };

  return (
    // Main container with a distinct blue background
    <div className={`bg-primary text-white rounded-lg p-6 flex flex-col gap-4 max-w-md mx-auto transition-all duration-300 ${isRemoving ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      
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

      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mt-2">
          <p className="text-sm text-white mb-3">Remove this promoted content?</p>
          <div className="flex gap-2">
            <button 
              onClick={confirmRemove}
              className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1.5 px-3 rounded transition-colors"
            >
              Yes, Remove
            </button>
            <button 
              onClick={cancelRemove}
              className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-1.5 px-3 rounded transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={handleRemoveClick} 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          disabled={isRemoving}
        >
          <BiX size={20} />
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
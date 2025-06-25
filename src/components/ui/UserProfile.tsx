import React from 'react';
import { BiBell, BiTrophy, BiGroup } from 'react-icons/bi';

// Define the data this component will need
interface UserProfileProps {
  level: number;
  xpPercentage: number; // A number from 0 to 100
  trophies: number;
  groups: number;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  level,
  xpPercentage,
  trophies,
  groups,
}) => {
  return (
    // This is the container with all the user stats
    <div className="flex items-center gap-6">
      <button className="bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md flex items-center gap-2">
        ⭐ Level Up
      </button>
      <BiBell size={24} className="text-secondary hover:text-white cursor-pointer" />

      {/* Trophies Stat */}
      <div className="flex items-center gap-2">
        <BiTrophy size={24} className="text-accent" />
        <span className="font-bold text-white">{trophies}</span>
      </div>

      {/* Groups Stat */}
      <div className="flex items-center gap-2">
        <BiGroup size={24} className="text-secondary" />
        <span className="font-bold text-white">{groups}</span>
      </div>

      {/* Level & XP Bar */}
      <div className="flex items-center gap-2">
        <div className="w-16 h-2 bg-card rounded-full">
          {/* The width of the progress bar is now dynamic based on the xpPercentage prop */}
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${xpPercentage}%` }}
          />
        </div>
        <span className="font-bold text-white">Lvl {level}</span>
      </div>
    </div>
  );
};
import React from 'react';
import { BiSearch } from 'react-icons/bi';

interface SearchBarProps {
  placeholder: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    // This is the exact code we had in TopBar, now isolated.
    <div className="flex items-center w-96 bg-card rounded-md p-2">
      <BiSearch className="text-secondary" size={24} />
      <input
        type="text"
        placeholder={placeholder} // Using the prop here
        className="bg-transparent w-full ml-2 text-white placeholder-secondary focus:outline-none"
      />
      <span className="text-secondary text-xs border border-border-color rounded px-4 py-0.5 whitespace-nowrap">
        Ctrl + K
      </span>
    </div>
  );
};
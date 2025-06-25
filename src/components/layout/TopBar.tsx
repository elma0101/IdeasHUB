import { SearchBar } from '../ui/SearchBar';
import { UserProfile } from '../ui/UserProfile';

const mockUser = {
  level: 5,
  xpPercentage: 60, // 60%
  trophies: 15,
  groups: 10,
};

export const TopBar = () => {
  return (
    <div className="h-16 px-6 flex items-center justify-between bg-background border-b border-border-color">
      
      <SearchBar placeholder="Search for ideas..." />
      <UserProfile {...mockUser} />

    </div>
  );
};
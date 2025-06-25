import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLike, BiComment, BiGitRepoForked, BiBookmark, BiSolidBookmark, BiSolidLike } from 'react-icons/bi';


export interface IdeaCardProps {
  id: string;
  author: { name: string; level: number; avatarUrl: string };
  title: string;
  description: string;
  tags: string[];
  imageUrl: string; // This was likely missing or not used
  stats: { likes: number; comments: number; forks: number };
  date: string;
  readTime: string;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({
  id,
  author,
  title,
  description,
  tags,
  imageUrl,
  stats,
  date,
  readTime,
}) => {

  // Bookmark state
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  // Like state
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(stats.likes);
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (

    // We add a max-width to prevent the card from becoming too wide
    <Link to={`/project/${id}`} className="bg-card rounded-lg p-5 flex flex-col gap-4 text-white hover:ring-2 hover:ring-primary/50 transition-all duration-300 max-w-md mx-auto">
      
      {/* Card Header: Author Info */}
      <div className="flex items-center gap-3">
        <img src={author.avatarUrl} alt={author.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <span className="font-semibold text-sm">By @{author.name}</span>
          <br />
          <span className="bg-accent text-background font-bold text-xs px-2 py-0.5 rounded-md w-fit">
            Level {author.level}
          </span>
        </div>
      </div>

      {/* Card Body: Title, Description, and Tags */}
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-secondary text-sm mt-1 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-border-color/50 text-secondary text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* --- FIX --- THIS SECTION WAS MISSING --- */}
      {/* Main Image */}
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mt-2" />

      {/* Card Footer: Stats and Info */}
      <div className="flex justify-between items-center text-secondary text-sm mt-2">
        {/* Left side: Stats */}
        <div className="flex items-center gap-5">
          <button onClick={handleLike} className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
            {isLiked ? (
              <BiSolidLike size={20} className="text-red-500" />
            ) : (
              <BiLike size={20} />
            )}
            <span className={isLiked ? "text-red-500" : ""}>{likeCount}</span>
          </button>
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-white"><BiComment size={20} /><span>{stats.comments}</span></div>
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-white"><BiGitRepoForked size={20} /><span>{stats.forks}</span></div>
        </div>

        {/* --- FIX --- THIS SECTION WAS MISSING --- */}
        {/* Right side: Date, Read Time, and Bookmark */}
        <div className="flex items-center gap-4">
        <button onClick={handleBookmark} className="cursor-pointer hover:text-white transition-colors">
            {isBookmarked ? (
              <BiSolidBookmark size={20} className="text-primary" /> // Show filled icon when bookmarked
            ) : (
              <BiBookmark size={20} /> // Show outline icon when not bookmarked
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong } from '../features/playerSlice';
import { openPlayListForm } from '../features/playlistSlice';

const SongCard = ({ song }) => {
  const id = song.id;
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.player.currentId);

  const handleCardClick = () => {
    dispatch(playSong(id));
  };

  const handlePlaylist = (e) => {
    e.stopPropagation();
    console.log("id", id);
    dispatch(openPlayListForm(id));
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white/90 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 w-44 sm:w-48 border border-indigo-100/50 hover:shadow-lg flex flex-col cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      aria-label={`Play ${song.title} by ${song.artist}`}
    >
      {/* Image Section */}
      {currentId === id ? (
        <div className="relative">
          <img
            src={song.cover || 'https://via.placeholder.com/192'}
            alt={song.title}
            className="w-full h-44 sm:h-48 object-cover opacity-50 grayscale"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
            {/* SVG Icon for Now Playing */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
             className="w-8 h-8 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={song.cover || 'https://via.placeholder.com/192'}
            alt={song.title}
            className="w-full h-44 sm:h-48 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 flex-grow">
        <h3
          className="text-sm font-semibold text-gray-900 truncate"
          title={song.title}
        >
          {song.title}
        </h3>
        <p
          className="text-xs text-gray-600 mt-1 truncate"
          title={song.artist}
        >
          {song.artist}
        </p>
      </div>

      {/* Add to Playlist Button */}
      <button
        onClick={handlePlaylist}
        className="w-full py-2 text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
        aria-label={`Add ${song.title} to playlist`}
      >
        + Add to Playlist
      </button>
    </div>
  );
};

export default SongCard;
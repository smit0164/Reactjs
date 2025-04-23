import React from 'react';
import { useSelector } from 'react-redux';
import SongCard from './SongCard';
import MusicPlayer from './MusicPlayer';
import PlaylistForm from './PlaylistForm';
import ShowPlaylists from './ShowPlaylist';

const SongList = () => {
  const { songs, isPlaying, currentId } = useSelector((state) => state.player);
  const playlistFormOpen = useSelector((state) => state.playlist.playlistForm);
  const currentSongId = useSelector((state) => state.playlist.currentSongId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-100 p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-8 sm:mb-12 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 flex items-center justify-center gap-2 sm:gap-3">
          <span className="text-4xl text-indigo-600">🎧</span> Music Player
        </h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg max-w-md mx-auto">
          Dive into your favorite tunes and vibe out! 🎶
        </p>
        <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
      </div>
  
      {/* Main Content + Sidebar */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Song Grid (Main Content) */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {songs.map((song, index) => (
              
              <SongCard key={index} song={song} />
            ))}
          </div>
        </div>
  
        {/* Playlist Sidebar */}
        <div className="lg:w-80">
          <ShowPlaylists />
        </div>
      </div>
      
      {/* Playlist Form */}
      {playlistFormOpen && <PlaylistForm songId={currentSongId} />}
  
      {/* Music Player */}
      {isPlaying && <MusicPlayer id={currentId} />}
    </div>
  );
};

export default SongList;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddSongToPlaylist, createPlayList } from '../features/playlistSlice';
import { closePlayListForm } from '../features/playlistSlice';

const PlaylistForm = ({ songId }) => {
  const [playlistInput, setPlaylist] = useState();
  const dispatch = useDispatch();
  const playlist=useSelector((state)=>state.playlist.playlists);


  const handleCreatePlaylist = (e) => {
    e.preventDefault();
  
    if (!playlistInput || playlistInput.trim() === "") {
      alert("Please fill in the input.");
      return;
    }
  
    dispatch(createPlayList({ songId, name: playlistInput.trim() }));
      setPlaylist("");
    };
  
    const clickOnAddSongToPlaylist = (playlistId, e) => {
        e.stopPropagation();
        dispatch(AddSongToPlaylist({playlistId,songId}))
    };
      

  const handleClose = () => {
    dispatch(closePlayListForm());
  };

  return (
    <div className="fixed inset-0 bg-gray-800/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white/95 p-6 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 relative">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold text-gray-800 mb-3">Add Song to Playlist</h2>
        <p className="text-sm text-gray-600 mb-4">Song ID: {songId}</p>

        {/* Create Playlist Field */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Create New Playlist
          </label>
          <form onSubmit={handleCreatePlaylist}>
            <div className="flex gap-2">
              <input
                onChange={(e) => setPlaylist(e.target.value)}
                type="text"
                placeholder="Enter playlist name"
                className="flex-grow px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50"
              />
              <button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:from-blue-700 hover:to-indigo-700 transition">
                Create
              </button>
            </div>
          </form>
        </div>

        {/* Existing Playlists */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Or Add to Existing Playlist
          </h3>
          <ul className="space-y-2">
            {playlist.map((playlist, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-md hover:bg-blue-200 transition"
                onClick={(e)=>clickOnAddSongToPlaylist(playlist.id,e)}
              >
                <span className="text-sm text-gray-800">{playlist.name}</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Add
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistForm;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylist } from '../features/playlistSlice';

const ShowPlaylists = () => {
  const dispatch = useDispatch();
  const [openPlaylistId, setOpenPlaylistId] = useState(null);
  const [songCollection, setSongCollection] = useState([]);
  const songs = useSelector((state) => state.player.songs);
  const { playlists } = useSelector((state) => state.playlist);

  useEffect(() => {
    dispatch(fetchPlaylist());
  }, [dispatch]);

  useEffect(() => {
    if (openPlaylistId !== null) {
      const playlist = playlists.find((p) => p.id === openPlaylistId);
      if (playlist) {
        const collected = songs.filter((song) => playlist.songs.includes(song.id));
        setSongCollection(collected);
      }
    } else {
      setSongCollection([]);
    }
  }, [openPlaylistId, playlists, songs]);

  const togglePlaylist = (id) => {
    setOpenPlaylistId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-lg p-6 h-full max-h-[calc(100vh-8rem)] overflow-y-auto border border-indigo-100/50 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="text-indigo-600 text-3xl">🎵</span> Your Playlists
      </h2>

      {playlists.length === 0 ? (
        <p className="text-gray-600 text-sm italic">No playlists found. Start creating your vibe!</p>
      ) : (
        <ul className="space-y-3">
          {playlists.map((playlist) => (
            <li
              key={playlist.id}
              className="bg-white/95 rounded-lg p-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 cursor-pointer hover:shadow-md"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => togglePlaylist(playlist.id)}
              >
                <div>
                  <h3 className="text-base font-semibold text-gray-900 truncate">
                    {playlist.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {playlist.songs.length} {playlist.songs.length === 1 ? 'song' : 'songs'}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-indigo-600 transition-transform ${
                    openPlaylistId === playlist.id ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>

              {openPlaylistId === playlist.id && (
                <ul className="mt-4 space-y-2 border-t border-indigo-200/50 pt-3 text-sm text-gray-700">
                  {songCollection.length === 0 ? (
                    <li className="italic text-gray-500">No songs added yet.</li>
                  ) : (
                    songCollection.map((song) => (
                      <li
                        key={song.id}
                        className="flex items-center gap-3 bg-white hover:bg-indigo-50 p-2 rounded shadow-sm"
                      >
                        <img
                          src={song.cover}
                          alt={song.title}
                          className="w-10 h-10 rounded object-cover shadow"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{song.title}</div>
                          <div className="text-xs text-gray-500">{song.artist}</div>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowPlaylists;

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nextSong ,prevSong} from '../features/playerSlice';
const MusicPlayer = ({ id }) => {
    
  const songs = useSelector((state) => state.player.songs);
  const song = songs.find((song) => song.id === id);
  const dispatch=useDispatch();
  const audioRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(true); 


  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying); 
  };
  const handlePlayNext=()=>{
    dispatch(nextSong())
  }
  const handlePlayPrev=()=>{
    dispatch(prevSong())
  }
  
  useEffect(() => {
    setIsPlaying(true); // Auto-play new song
    audioRef.current.play();
  }, [song]);

  useEffect(()=>{
    if (isPlaying) {
        audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  },[isPlaying])

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-gradient-to-r from-indigo-100 to-purple-100 backdrop-blur-lg text-gray-900 rounded-xl shadow-lg z-50 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 border border-indigo-200/50">
      {/* Song Info */}
      <div className="flex items-center gap-4">
        <img
          src={song.cover}
          alt={song.title}
          className="w-14 h-14 object-cover rounded-md shadow-md"
        />
        <div>
          <h4 className="text-base font-semibold text-gray-900 line-clamp-1">
            {song.title}
          </h4>
          <p className="text-sm text-gray-600 line-clamp-1">{song.artist}</p>
        </div>
      </div>
  
      {/* Controls */}
      <div className="flex items-center gap-5">
        <button
          onClick={handlePlayPrev}
          className="text-gray-600 hover:text-indigo-600 transition"
          title="Previous"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
  
        <button
          onClick={handleTogglePlay}
          className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          )}
        </button>
  
        <button
          onClick={handlePlayNext}
          className="text-gray-600 hover:text-indigo-600 transition"
          title="Next"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
  
      {/* Audio Element (hidden) */}
      <audio controls ref={audioRef} src={song.src} type="audio/mpeg" onError={() => alert('Failed to load audio')}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;

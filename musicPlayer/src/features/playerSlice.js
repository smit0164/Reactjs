import { createSlice, current } from '@reduxjs/toolkit'
import songs from '../data/song'

const initialState = {
  songs: songs,
  isPlaying: false,
  playButton:false,
  currentId: 0, 
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playSong: (state, action) => {
      state.isPlaying = true;
      state.currentId = action.payload; 
    },
    nextSong:(state)=>{
       state.currentId++;
       console.log("current is in the state",state.currentId)
       if(state.currentId>state.songs.length){
           state.currentId=1;
       }
    },
    prevSong:(state)=>{
      state.currentId--;
      if(state.currentId==0){
          state.currentId=state.songs.length;
      }
    },
 
  },
})

export const { playSong,nextSong,prevSong} = playerSlice.actions; 
export default playerSlice.reducer;

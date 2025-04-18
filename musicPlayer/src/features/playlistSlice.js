import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlistForm: false,
  currentSongId: 0,
  loading: false,
  error: false,
  playlists: [],
};

export const fetchPlaylist = createAsyncThunk(
  'playlist/getPlaylist',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://6801ea0181c7e9fbcc43b5c2.mockapi.io/playlists');
      const data = await response.json();
      console.log('data:', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong while fetching the playlist');
    }
  }
);

export const createPlayList = createAsyncThunk(
  'playlist/createPlaylist',
  async (playlistData, thunkAPI) => {
    try {
      console.log(playlistData);
      const newPlaylist = {
        name: playlistData.name,
        songs: [playlistData.songId],
      };
      console.log('newPlaylist', newPlaylist);
      const response = await fetch('https://6801ea0181c7e9fbcc43b5c2.mockapi.io/playlists', {
        method: 'POST',
        body: JSON.stringify(newPlaylist),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong while creating the playlist');
    }
  }
);

export const AddSongToPlaylist = createAsyncThunk(
  'playlist/AddSongToPlaylist',
  async ({ playlistId, songId }, thunkAPI) => {
    try {
      // First, fetch the existing playlist
      const existingRes = await fetch(`https://6801ea0181c7e9fbcc43b5c2.mockapi.io/playlists/${playlistId}`);
      const existingPlaylist = await existingRes.json();

      // Append the new songId to existing songs array
      const updatedPlaylist = {
        name: existingPlaylist.name,
        songs: [...(existingPlaylist.songs || []), songId],
      };

      console.log('Updating playlist with:', updatedPlaylist);

      // Send PUT request with updated data
      const response = await fetch(`https://6801ea0181c7e9fbcc43b5c2.mockapi.io/playlists/${playlistId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedPlaylist),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Updated playlist response:', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong while updating the playlist');
    }
  }
);

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    openPlayListForm: (state, action) => {
      state.playlistForm = true;
      state.currentSongId = action.payload;
    },
    closePlayListForm: (state) => {
      state.playlistForm = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchPlaylist
      .addCase(fetchPlaylist.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchPlaylist.fulfilled, (state, action) => {
        state.loading = false;
        state.playlists = action.payload;
      })
      .addCase(fetchPlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // createPlayList
      .addCase(createPlayList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createPlayList.fulfilled, (state, action) => {
        state.loading = false;
        state.playlists.push(action.payload);
        state.playlistForm = false;
      })
      .addCase(createPlayList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // AddSongToPlaylist
      .addCase(AddSongToPlaylist.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(AddSongToPlaylist.fulfilled, (state, action) => {
        state.loading = false;
        const updatedPlaylist = action.payload;
        const index = state.playlists.findIndex((p) => p.id === updatedPlaylist.id);
        if (index !== -1) {
          state.playlists[index] = updatedPlaylist;
        }
        state.playlistForm = false;
      })
      .addCase(AddSongToPlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { openPlayListForm, closePlayListForm } = playlistSlice.actions;
export default playlistSlice.reducer;
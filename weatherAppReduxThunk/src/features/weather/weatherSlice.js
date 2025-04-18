import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  weatherData: null,
  loading: false,
  error:false
}

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (params, thunkAPI) => {
    try {
      const apiKey = 'cdef659856f8dfa3de292d34440b6e23'
      let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=${apiKey}&units=metric`

      if (params.city) {
        weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=${apiKey}&units=metric`
      }

      const res = await fetch(weatherApi)
      const data = await res.json()
      if (data.cod !== 200) {
        return thunkAPI.rejectWithValue(data.message || 'Weather not found')
      }
      return data
    } catch (err) {
      return thunkAPI.rejectWithValue('Oops, there seems to be an error')
    }
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getWeather.fulfilled, (state, { payload }) => {
        state.loading = false
        state.weatherData = payload
        state.error = false
      })
      .addCase(getWeather.rejected, (state, { payload }) => {
        state.loading = false
        state.error = true
        console.error('Error fetching weather:', payload)
      })
  },
})

export const weatherReducer = weatherSlice.reducer

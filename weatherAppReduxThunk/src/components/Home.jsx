import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from "../features/weather/weatherSlice"
import { useState } from 'react';

export default function Home() {
  const [userLocation, setUserLocation] = useState({});
  const [searchTerm,setSearchTerm]=useState();
  const dispatch = useDispatch()
  const { weatherData, loading ,error} = useSelector((state) => state.weather)

  const searchCity=(e)=>{
    e.preventDefault();
    dispatch(getWeather({
         city:searchTerm
    }));
  }
  const getUserLocation = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          
          // update the value of userlocation variable
          setUserLocation({ latitude, longitude });
        },
        // if there was an error getting the users location
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  useEffect(()=>{
    getUserLocation();
  },[])

  useEffect(() => {
    if (userLocation.latitude && userLocation.longitude) {
      dispatch(getWeather({
        lat: userLocation.latitude,
        lon: userLocation.longitude
      }))
    }
  }, [userLocation])
  

  

 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">🌤️ Weather App</h1>
  
        {/* Search Form */}
        <form onSubmit={searchCity} className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search for a city..."
            className="flex-grow px-4 py-3 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button
            type="submit"
            className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
  
        {/* Weather Card or Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <p className="text-red-600 text-center text-lg font-medium">
            ⚠️ No weather data available.
          </p>
        ) : weatherData && weatherData.main && weatherData.weather ? (
          <div className="bg-blue-100 p-6 rounded-xl shadow-inner text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-700">{weatherData.name}</h2>
            <p className="text-4xl font-bold text-blue-800">
              {weatherData.main.temp}°C
            </p>
            <p className="text-lg text-gray-600 capitalize">
              {weatherData.weather[0].description}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
  
  
}

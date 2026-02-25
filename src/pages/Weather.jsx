import { useState } from 'react';
import Navbar from '../components/Navbar';
 
const API_KEY = '5a4de317bfed11255dd6a8a378f950c1';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
 
function Weather() {
  const [city,    setCity]    = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');
 
  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true); setError(''); setWeather(null);
 
    try {
      // units=metric gives Celsius; units=imperial gives Fahrenheit
      const res  = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
 
      if (!res.ok) throw new Error('City not found. Check spelling.');
 
      const data = await res.json();
 
      setWeather({
        city:        data.name,
        country:     data.sys.country,
        temp:        Math.round(data.main.temp),
        feelsLike:   Math.round(data.main.feels_like),
        humidity:    data.main.humidity,
        wind:        data.wind.speed,
        description: data.weather[0].description,
        rainfall:    data.rain ? (data.rain['1h'] || 0) : 0,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);  // always runs, success or failure
    }
  };
 
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='max-w-2xl mx-auto px-6 py-8'>
        <h1 className='text-3xl font-bold text-green-800 mb-8'>🌤️ Weather Information</h1>
 
        <div className='flex gap-3 mb-6'>
          <input
            type='text' placeholder='Enter city (e.g. Delhi, Bangalore)'
            value={city} onChange={e => setCity(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && fetchWeather()}
            className='flex-1 p-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500'
          />
          <button onClick={fetchWeather}
            className='bg-blue-600 text-white px-6 rounded-xl font-bold hover:bg-blue-700 transition'>
            Search
          </button>
        </div>
 
        {loading && <p className='text-center text-gray-500 py-8'>Fetching weather data...</p>}
        {error   && <p className='text-center text-red-500 py-4 bg-red-50 rounded-xl'>{error}</p>}
 
        {weather && (
          <div className='bg-gradient-to-br from-blue-800 to-blue-600 text-white rounded-2xl p-8 shadow-xl'>
            <h2 className='text-3xl font-bold mb-1'>{weather.city}, {weather.country}</h2>
            <p className='text-blue-200 capitalize mb-6'>{weather.description}</p>
            <div className='text-7xl font-bold mb-8'>{weather.temp}C</div>
            <div className='grid grid-cols-3 gap-4'>
              <div className='bg-white bg-opacity-20 rounded-xl p-4 text-center'>
                <div className='text-2xl font-bold'>{weather.humidity}%</div>
                <div className='text-sm text-blue-200 mt-1'>Humidity</div>
              </div>
              <div className='bg-white bg-opacity-20 rounded-xl p-4 text-center'>
                <div className='text-2xl font-bold'>{weather.wind} m/s</div>
                <div className='text-sm text-blue-200 mt-1'>Wind Speed</div>
              </div>
              <div className='bg-white bg-opacity-20 rounded-xl p-4 text-center'>
                <div className='text-2xl font-bold'>{weather.rainfall} mm</div>
                <div className='text-sm text-blue-200 mt-1'>Rainfall</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
 
export default Weather;

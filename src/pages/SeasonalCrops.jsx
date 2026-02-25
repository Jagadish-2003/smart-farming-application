import { useState } from 'react';
import { CROPS } from '../data/crops';
import Navbar from '../components/Navbar';
 
// Detect season from current month
function getCurrentSeason() {
  const month = new Date().getMonth() + 1; // getMonth() returns 0-11, so add 1
  if (month >= 6 && month <= 10) return 'Kharif';
  if (month >= 11 || month <= 3) return 'Rabi';
  return 'Zaid'; // April–May
}
 
const SEASONS = {
  Kharif: { period: 'June - October',   color: 'green',  icon: '🌧️', bg: 'bg-green-50 border-green-200' },
  Rabi:   { period: 'November - March',  color: 'blue',   icon: '❄️', bg: 'bg-blue-50 border-blue-200'   },
  Zaid:   { period: 'April - May',       color: 'orange', icon: '☀️', bg: 'bg-orange-50 border-orange-200'},
};
 
function SeasonalCrops() {
  const [active, setActive] = useState(getCurrentSeason()); // auto-set to current season
  const crops = CROPS.filter(c => c.season === active);     // filter crops by season
  const info  = SEASONS[active];
 
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='max-w-4xl mx-auto px-6 py-8'>
        <h1 className='text-3xl font-bold text-green-800 mb-6'>📅 Seasonal Crop Guide</h1>
 
        {/* Season selector buttons */}
        <div className='flex gap-3 mb-6'>
          {Object.entries(SEASONS).map(([name, s]) => (
            <button key={name} onClick={() => setActive(name)}
              className={`flex-1 py-3 px-4 rounded-xl font-bold border-2 transition ${ active === name
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-white text-gray-600 border-gray-200 hover:border-green-400'
              }`}>
              {s.icon} {name}
              {name === getCurrentSeason() && (
                <span className='block text-xs mt-0.5 opacity-70'>Current</span>
              )}
            </button>
          ))}
        </div>
 
        {/* Season info banner */}
        <div className={`rounded-xl p-4 mb-6 border-2 ${info.bg}`}>
          <p className='font-bold text-gray-800'>{active} Season {info.icon}</p>
          <p className='text-gray-500 text-sm mt-1'>{info.period}</p>
        </div>
 
        {/* Crop cards grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {crops.map(crop => (
            <div key={crop.name} className='bg-white rounded-2xl p-5 shadow text-center hover:shadow-md transition'>
              <div className='text-4xl mb-3'>{crop.icon}</div>
              <h3 className='font-bold text-gray-800 mb-2'>{crop.name}</h3>
              <div className='space-y-1 text-xs text-gray-400'>
                <p>pH: {crop.ph.min} – {crop.ph.max}</p>
                <p>Temp: {crop.temperature.min}–{crop.temperature.max}C</p>
                <p>Rain: {crop.rainfall.min}–{crop.rainfall.max} mm</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default SeasonalCrops;

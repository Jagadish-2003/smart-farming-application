import { useState } from 'react';
import { CROPS } from '../data/crops';
import Navbar from '../components/Navbar';
 
// Scoring helper: how well does 'value' fit within { min, max }?
function getScore(value, { min, max }) {
  if (value >= min && value <= max) return 100;  // perfect fit
  const dist = value < min ? min - value : value - max;
  return Math.max(0, 100 - dist * 2);            // penalize by distance
}
 
// Main recommendation function
function recommendCrops(params) {
  return CROPS
    .map(crop => {
      const score =
        getScore(params.nitrogen,    crop.nitrogen)    * 0.20 +
        getScore(params.phosphorus,  crop.phosphorus)  * 0.15 +
        getScore(params.potassium,   crop.potassium)   * 0.15 +
        getScore(params.ph,          crop.ph)          * 0.20 +
        getScore(params.temperature, crop.temperature) * 0.15 +
        getScore(params.humidity,    crop.humidity)    * 0.10 +
        getScore(params.rainfall,    crop.rainfall)    * 0.05;
      return { ...crop, score: Math.round(score) };
    })
    .sort((a, b) => b.score - a.score)  // sort: highest score first
    .slice(0, 5);                        // keep only top 5
}
 
function CropRecommend() {
  const [params, setParams] = useState({
    nitrogen: 80, phosphorus: 50, potassium: 50,
    ph: 6.5, temperature: 25, humidity: 65, rainfall: 80
  });
  const [results, setResults] = useState(null);
 
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='max-w-5xl mx-auto px-6 py-8'>
        <h1 className='text-3xl font-bold text-green-800 mb-8'>🌾 Crop Recommendation</h1>
 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
 
          {/* ── INPUT PANEL ── */}
          <div className='bg-white rounded-2xl p-6 shadow'>
            <h2 className='font-bold text-lg mb-6 text-gray-800'>
              Enter Your Soil & Climate Parameters
            </h2>
 
            {/* Reusable slider helper */}
            {[
              { label: 'Nitrogen (N)',    key: 'nitrogen',    min: 0,  max: 200, step: 1,   unit: 'mg/kg' },
              { label: 'Phosphorus (P)', key: 'phosphorus',  min: 0,  max: 120, step: 1,   unit: 'mg/kg' },
              { label: 'Potassium (K)',  key: 'potassium',   min: 0,  max: 120, step: 1,   unit: 'mg/kg' },
              { label: 'Soil pH',        key: 'ph',          min: 4,  max: 9,   step: 0.1, unit: ''      },
              { label: 'Temperature',    key: 'temperature', min: 0,  max: 50,  step: 1,   unit: 'C'    },
              { label: 'Humidity',       key: 'humidity',    min: 0,  max: 100, step: 1,   unit: '%'     },
              { label: 'Rainfall',       key: 'rainfall',    min: 0,  max: 400, step: 1,   unit: 'mm'   },
            ].map(s => (
              <div key={s.key} className='mb-5'>
                <div className='flex justify-between mb-1'>
                  <span className='text-sm font-semibold text-gray-700'>{s.label}</span>
                  <span className='text-sm text-green-700 font-bold'>{params[s.key]} {s.unit}</span>
                </div>
                <input type='range' min={s.min} max={s.max} step={s.step}
                  value={params[s.key]}
                  onChange={e => setParams({ ...params, [s.key]: parseFloat(e.target.value) })}
                  className='w-full accent-green-600'
                />
              </div>
            ))}
 
            <button
              onClick={() => setResults(recommendCrops(params))}
              className='w-full mt-2 bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition'>
              Find Best Crops
            </button>
          </div>
 
          {/* ── RESULTS PANEL ── */}
          <div className='bg-white rounded-2xl p-6 shadow'>
            <h2 className='font-bold text-lg mb-6 text-gray-800'>Top Recommendations</h2>
 
            {results ? (
              results.map((crop, i) => (
                <div key={crop.name} className={`p-4 rounded-xl mb-3 border-2 ${ i === 0
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-100 bg-gray-50'
                }`}>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='font-bold text-gray-800'>{crop.icon} {crop.name}</span>
                    <div className='flex items-center gap-2'>
                      <span className='text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full'>{crop.season}</span>
                      <span className='font-bold text-green-700'>{crop.score}%</span>
                    </div>
                  </div>
                  <div className='h-2 bg-gray-200 rounded-full mb-2'>
                    <div className='h-2 bg-green-500 rounded-full transition-all' style={{ width: `${crop.score}%` }} />
                  </div>
                  <p className='text-xs text-gray-500'>{crop.description}</p>
                </div>
              ))
            ) : (
              <p className='text-gray-400 text-center mt-20'>
                Adjust the sliders and click Find Best Crops
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CropRecommend;

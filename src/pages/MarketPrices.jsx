import { useState } from 'react';
import { MARKET_PRICES } from '../data/crops';
import Navbar from '../components/Navbar';
 
function MarketPrices() {
  const [search, setSearch] = useState('');
 
  // Filter prices based on search text (case-insensitive)
  const filtered = MARKET_PRICES.filter(item =>
    item.crop.toLowerCase().includes(search.toLowerCase())
  );
 
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='max-w-5xl mx-auto px-6 py-8'>
        <h1 className='text-3xl font-bold text-green-800 mb-2'>💰 Market Prices</h1>
        <p className='text-gray-500 mb-6'>Direct APMC Mandi Rates — No Middlemen</p>
 
        {/* Info banner */}
        <div className='bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6'>
          <p className='text-amber-800 text-sm'>
            💡 These are wholesale mandi prices. Selling directly saves farmers 15-30%
            typically taken by commission agents.
          </p>
        </div>
 
        {/* Search */}
        <input type='text' placeholder='Search crop...'
          value={search} onChange={e => setSearch(e.target.value)}
          className='w-full max-w-xs p-3 border-2 border-green-200 rounded-xl mb-6 focus:outline-none focus:border-green-500'
        />
 
        {/* Price cards */}
        <div className='grid grid-cols-3 gap-4'>
          {filtered.map(item => (
            <div key={item.crop} className='bg-white rounded-2xl p-5 shadow hover:shadow-md transition'>
              <div className='flex justify-between items-start mb-4'>
                <span className='font-bold text-gray-800 text-lg'>{item.crop}</span>
                {/* Change badge: green for up, red for down */}
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${ item.change > 0
                  ? 'bg-green-100 text-green-700'
                  : item.change < 0 ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-500'
                }`}>
                  {item.change > 0 ? '▲' : item.change < 0 ? '▼' : '–'} {Math.abs(item.change)}%
                </span>
              </div>
              <div className='text-3xl font-bold text-green-700'>
                ₹{item.price.toLocaleString()}
              </div>
              <div className='text-xs text-gray-400 mt-1'>per {item.unit}</div>
              <div className='text-xs text-gray-400 mt-1'>📍 {item.market}</div>
            </div>
          ))}
        </div>
 
        <p className='text-xs text-gray-400 text-center mt-8'>
          Prices updated daily · Source: APMC Mandi Boards · India
        </p>
      </div>
    </div>
  );
}
 
export default MarketPrices;

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
 
const FEATURES = [
  { title: 'Crop Recommendation', icon: '🌾', link: '/crops',
    desc: 'AI-powered suggestions based on soil & climate data.',
    bg: 'bg-green-50 border-green-200 hover:bg-green-100' },
  { title: 'Weather Information',  icon: '🌤️', link: '/weather',
    desc: 'Real-time weather using OpenWeatherMap API.',
    bg: 'bg-blue-50 border-blue-200 hover:bg-blue-100' },
  { title: 'Market Prices',        icon: '💰', link: '/market',
    desc: 'Direct mandi prices. No middlemen. Sell at full value.',
    bg: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100' },
  { title: 'Seasonal Crops',       icon: '📅', link: '/seasonal',
    desc: 'Discover the best crops for the current season.',
    bg: 'bg-purple-50 border-purple-200 hover:bg-purple-100' },
];
 
function Home() {
  const user = JSON.parse(localStorage.getItem('farmUser') || '{}');
 
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='max-w-5xl mx-auto px-6 py-10'>
        <h1 className='text-3xl font-bold text-green-800 mb-2'>
          Welcome, {user.name || 'Farmer'} 👋
        </h1>
        <p className='text-gray-500 mb-10'>What would you like to do today?</p>
 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {FEATURES.map(f => (
            <Link to={f.link} key={f.title}
              className={`p-8 rounded-2xl border-2 ${f.bg} transition-all duration-200 hover:shadow-lg hover:scale-105`}>
              <div className='text-5xl mb-4'>{f.icon}</div>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>{f.title}</h2>
              <p className='text-gray-500 text-sm'>{f.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Home;

import { Link, useNavigate } from 'react-router-dom';
 
function Navbar() {
  const navigate = useNavigate();
 
  const handleLogout = () => {
    localStorage.removeItem('farmSession'); // delete session
    navigate('/login');                      // go to login
  };
 
  return (
    <nav className='bg-green-800 text-white px-6 py-4 flex justify-between items-center shadow-lg'>
      {/* Left: Brand */}
      <div className='flex items-center gap-3'>
        <span className='text-2xl'>🌱</span>
        <span className='text-xl font-bold'>Farmers App</span>
      </div>
 
      {/* Right: Nav links */}
      <div className='flex items-center gap-4 text-sm font-medium'>
        <Link to='/home'     className='hover:text-green-300 transition'>Home</Link>
        <Link to='/crops'    className='hover:text-green-300 transition'>🌾 Crops</Link>
        <Link to='/weather'  className='hover:text-green-300 transition'>🌤️ Weather</Link>
        <Link to='/market'   className='hover:text-green-300 transition'>💰 Market</Link>
        <Link to='/seasonal' className='hover:text-green-300 transition'>📅 Seasonal</Link>
        <button onClick={handleLogout}
          className='bg-red-500 px-3 py-1.5 rounded-lg hover:bg-red-600 transition font-semibold'>
          Logout
        </button>
      </div>
    </nav>
  );
}
 
export default Navbar;

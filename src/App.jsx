import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
 
// Import all page components
import Login          from './pages/Login';
import Register       from './pages/Register';
import Home           from './pages/Home';
import CropRecommend  from './pages/CropRecommend';
import Weather        from './pages/Weather';
import MarketPrices   from './pages/MarketPrices';
import SeasonalCrops  from './pages/SeasonalCrops';
import ProtectedRoute from './components/ProtectedRoute';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root URL to login */}
        <Route path='/'         element={<Navigate to='/login' />} />
 
        {/* Public routes — anyone can access */}
        <Route path='/login'    element={<Login />} />
        <Route path='/register' element={<Register />} />
 
        {/* Protected routes — only logged-in users */}
        <Route path='/home'     element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/crops'    element={<ProtectedRoute><CropRecommend /></ProtectedRoute>} />
        <Route path='/weather'  element={<ProtectedRoute><Weather /></ProtectedRoute>} />
        <Route path='/market'   element={<ProtectedRoute><MarketPrices /></ProtectedRoute>} />
        <Route path='/seasonal' element={<ProtectedRoute><SeasonalCrops /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;

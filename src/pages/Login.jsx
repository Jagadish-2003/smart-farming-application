import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
 
function Login() {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const navigate = useNavigate();
 
  const handleLogin = (e) => {
    e.preventDefault();
 
    // Get stored user from localStorage
    const stored = localStorage.getItem('farmUser');
    if (!stored) {
      setError('No account found. Please register first.'); return;
    }
 
    // JSON.parse converts the stored string back to an object
    const user = JSON.parse(stored);
 
    // Compare entered credentials with stored ones
    if (user.email !== email || user.password !== password) {
      setError('Invalid email or password.'); return;
    }
 
    // Store session — this is what ProtectedRoute checks
    localStorage.setItem('farmSession', user.email);
 
    navigate('/home'); // redirect to dashboard
  };
 
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md'>
        <div className='text-4xl mb-3'>🌾</div>
        <h1 className='text-3xl font-bold text-green-800 mb-1'>Welcome Back</h1>
        <p className='text-gray-500 mb-6'>Sign in to your Farmers App dashboard</p>
 
        <form onSubmit={handleLogin} className='space-y-4'>
          <input type='email' placeholder='Email Address'
            value={email} onChange={e => setEmail(e.target.value)}
            className='w-full p-3 border-2 border-green-100 rounded-xl focus:outline-none focus:border-green-500' />
 
          <input type='password' placeholder='Password'
            value={password} onChange={e => setPassword(e.target.value)}
            className='w-full p-3 border-2 border-green-100 rounded-xl focus:outline-none focus:border-green-500' />
 
          {error && <p className='text-red-500 text-sm bg-red-50 p-3 rounded-lg'>{error}</p>}
 
          <button type='submit'
            className='w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition'>
            Sign In
          </button>
        </form>
 
        <p className='mt-5 text-center text-gray-500 text-sm'>
          New here?{' '}
          <Link to='/register' className='text-green-700 font-bold hover:underline'>Create Account</Link>
        </p>
      </div>
    </div>
  );
}
 
export default Login;

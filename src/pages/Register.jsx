import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
 
function Register() {
  // useState: stores each field and the error message
  const [name,     setName]     = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [confirm,  setConfirm]  = useState('');
  const [error,    setError]    = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page from refreshing on form submit
 
    // Validate: check all fields are filled
    if (!name || !email || !password || !confirm) {
      setError('Please fill in all fields.'); return;
    }
    // Validate: passwords must match
    if (password !== confirm) {
      setError('Passwords do not match.'); return;
    }
    // Validate: minimum password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters.'); return;
    }
 
    // Save user object to localStorage as JSON string
    const user = { name, email, password };
    localStorage.setItem('farmUser', JSON.stringify(user));
 
    navigate('/login'); // redirect to login page
  };
 
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md'>
        <div className='text-4xl mb-3'>🌱</div>
        <h1 className='text-3xl font-bold text-green-800 mb-1'>Create Account</h1>
        <p className='text-gray-500 mb-6'>Join Farmers App — Smart Farming Platform</p>
 
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input type='text' placeholder='Full Name'
            value={name} onChange={e => setName(e.target.value)}
            className='w-full p-3 border-2 border-green-100 rounded-xl focus:outline-none focus:border-green-500' />
 
          <input type='email' placeholder='Email Address'
            value={email} onChange={e => setEmail(e.target.value)}
            className='w-full p-3 border-2 border-green-100 rounded-xl focus:outline-none focus:border-green-500' />
 
          <input type='password' placeholder='Password (min 6 chars)'
            value={password} onChange={e => setPassword(e.target.value)}
            className='w-full p-3 border-2 border-green-100 rounded-xl focus:outline-none focus:border-green-500' />
 
          <input type='password' placeholder='Confirm Password'
            value={confirm} onChange={e => setConfirm(e.target.value)}
            className='w-full p-3 border-2 border-green-100 rounded-xl focus:outline-none focus:border-green-500' />
 
          {error && <p className='text-red-500 text-sm bg-red-50 p-3 rounded-lg'>{error}</p>}
 
          <button type='submit'
            className='w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition'>
            Create My Account
          </button>
        </form>
 
        <p className='mt-5 text-center text-gray-500 text-sm'>
          Already have an account?{' '}
          <Link to='/login' className='text-green-700 font-bold hover:underline'>Sign In</Link>
        </p>
      </div>
    </div>
  );
}
 
export default Register;

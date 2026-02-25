import { Navigate } from 'react-router-dom';
 
function ProtectedRoute({ children }) {
  // Check if session exists in localStorage
  const session = localStorage.getItem('farmSession');
 
  // If not logged in, redirect to /login
  // 'replace' prevents the login page from being added to browser history
  if (!session) {
    return <Navigate to='/login' replace />;
  }
 
  // If logged in, render whatever page is passed as children
  return children;
}
 
export default ProtectedRoute;

import { Link } from 'react-router-dom'

function Navigation() {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/" className="text-xl font-bold">Auth System</Link>
        </li>
        <li>
          {user ? (
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          ) : (
            <div className="space-x-4">
              <Link to="/login" className="hover:text-gray-300">Login</Link>
              <Link to="/register" className="hover:text-gray-300">Register</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navigation


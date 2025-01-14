import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState(null)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
      setEmail(foundUser.email)
      setName(foundUser.name || '')
    } else {
      navigate('/login')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedUser = { ...user, email, name }

    if (photo) {
      updatedUser.photoUrl = URL.createObjectURL(photo)
    }

    try {
      const response = await fetch(`http://localhost:3001/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data)
        localStorage.setItem('user', JSON.stringify(data))
        setMessage('Profile updated successfully!')
      } else {
        setMessage('Failed to update profile. Please try again.')
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    }
  }

  if (!user) return null

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Dashboard</h1>
      <p className="mb-5 text-center">Welcome, {user.name || user.email}!</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="photo" className="block mb-1">Profile Photo</label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {user.photoUrl && (
          <div className="mt-4">
            <img src={user.photoUrl} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
          </div>
        )}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Update Profile</button>
      </form>
      {message && <p className="mt-4 text-center font-bold">{message}</p>}
      <button onClick={handleLogout} className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600">Logout</button>
    </div>
  )
}

export default Dashboard


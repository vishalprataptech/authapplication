import { createFileRoute } from '@tanstack/react-router'
import "../style/user.css"

export const Route = createFileRoute('/user')({
  component: User,
})

export default function User() {
  return (
    <div >
  <main className="container">

    <div className="welcome-card">
      <h1>Welcome Back 👋</h1>
      <p>You are successfully logged in.</p>
    </div>
       <div className="nav-actions">
      <button className="btn btn-me">Me</button>
      <button className="btn btn-logout">Logout</button>
    </div>
  </main></div>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import Register from './register'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import "../style/style.css"

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
   

<>
  <div className="wrapper">
    <div className="card">
      <h2>Welcome</h2>

      <div className="buttons">
        <Link to ="/login" className="btn secondary"><h3>Login</h3></Link>
        <Link to ="/register" className="btn secondary"><h3>Register</h3></Link>
         
        {/* <button class="btn danger">Logout</button> */}
      </div>
    </div>
  </div></>


  )
}

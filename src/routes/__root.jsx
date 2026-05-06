import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'





const RootLayout = () => (
  <>
    <div >
      <Link to="/"></Link>
      
    </div>
    <Outlet />
    <TanStackRouterDevtools /> 

  </>
)

export const Route = createRootRoute({ component: RootLayout })

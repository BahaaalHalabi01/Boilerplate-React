import { Navigate, useLocation } from 'react-router-dom'
import { isAuth } from '@/services/auth'

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = isAuth()
  const location = useLocation()

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

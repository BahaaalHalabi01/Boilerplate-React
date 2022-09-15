import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import { HomePage, LoginPage } from '@/pages'
import { PrivateRoute } from './PrivateRoute'

interface AuthContextType {
  user: any
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

const AuthContext = createContext<AuthContextType>(null!)

export const Routes: React.FC = () => {
  const [user, setUser] = useState<any>(null)

  const signin = (newUser: string, callback: VoidFunction) => {
    setUser(newUser)
    return () => {}
  }

  const signout = (callback: VoidFunction) => {
    setUser(null)
    return () => {}
  }

  const value = { user, signin, signout }

  return (
    <AuthContext.Provider value={value}>
      <Router>
        <Switch>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          ></Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

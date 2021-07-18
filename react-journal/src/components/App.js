// src/components/App.js

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../../node_modules/axist/dist/axist.min.css'
import { AuthProvider } from '../contexts/Auth'

import { Signup } from './Signup'
import { Login } from './Login'
import { Dashboard } from './Dashboard'
import { PrivateRoute } from './PrivateRoute'

export function App() {
  return (
    <div>
      <h1>supabase-auth-react</h1>

      {/* Add routes here👇 */}
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

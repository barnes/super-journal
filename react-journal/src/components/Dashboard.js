// src/components/Dashboard.js
import { useAuth } from "../contexts/Auth"
import { useHistory } from "react-router"

export function Dashboard() {
  // Get current user and signOut function from context
  const { user, signOut } = useAuth()

  const history = useHistory()

  async function handleSignOut() {
    // Ends user session
    await signOut()

    // Redirects the user to Login page
    history.push('/login')
  }
  
    return (
      <div>
        <p>Welcome, {user?.id}</p>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    )
  }
  
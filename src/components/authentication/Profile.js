import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <div className="d-grid gap-2 col-6 mx-auto">
          <Link to="/update-profile" className="btn btn-dark btn-block">
            Update Profile
          </Link>
              <Button type="button" className="btn btn-secondary btn-block"  onClick={handleLogout}>
              Log Out
              </Button>
          </div>
        </Card.Body>
      </Card>
    </CenteredContainer>
  )
}
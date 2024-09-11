import React from 'react'
import Header from '../Header'

class AdminPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Admin Page</h1>
        <p>Manage products, users, and more...</p>
        {/* Add admin functionalities here */}
      </div>
    )
  }
}

export default AdminPage
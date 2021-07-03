import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import ChatPanel from './components/ChatPanel'
import ChatRoom from './components/ChatRoom'
import Header from './components/Header'
import Search from './components/Search'

export class App extends Component {
  state = {
    chats: [
      {
        id: 1,
        name: 'John Doe'
      },
      {
        id: 2,
        name: 'Michael Smith'
      },
      {
        id: 3,
        name: 'James Harry'
      },
      {
        id: 4,
        name: 'Brad Peters'
      },
      {
        id: 5,
        name: 'Mary Jane'
      },
    ]
  }

  render() {
    return (
      <Router>

        <Route exact path="/" render={(props) => (
          <div className="container">
            <Header />
            <div className="card mb-5" style={{ boxShadow: '0px 10px 20px darkgrey' }}>
              <div className="card-title text-center">
                <h1 className="mt-2 mb-0">Messages</h1>
                <hr />
              </div>
              <div className="card-body">
                <ChatPanel chats={ this.state.chats }/>
              </div>
            </div>
          </div>
        )} />

        <Route path="/chatroom" component={ ChatRoom }/>
          
      </Router>
    )
  }
}

export default App

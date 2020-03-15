import React from 'react'

import { BrowserRouter as Router, Route} from 'react-router-dom'

import ToDoList from './components/ToDoList/ToDoList'

function App() {
  return (
    <Router>
      <Route path='/' exact component={ToDoList} />
    </Router>
  )
}

export default App

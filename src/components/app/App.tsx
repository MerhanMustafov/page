import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import { Page } from './page/Page'

function App() {
  return (
    <BrowserRouter>
      <div  className="App">
        <Page />
      </div>
    </BrowserRouter>
  )
}

export default App

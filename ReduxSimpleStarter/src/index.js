import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyC58tjw7-BrhVrVrUvCxtxMk5IIk0ZKAlw'

// Create a new component; this component should produce some html

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put in on the page (in the DOM)
ReactDOM.render(
  <App />,
  document.querySelector('.container')
)

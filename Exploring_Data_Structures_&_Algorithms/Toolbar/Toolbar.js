import React from 'react'
import ToggleButton from '../Code/ChapterNavigation/ToggleButton'
import {Link} from 'react-router-dom'
import './Toolbar.css'


const Toolbar = (props) => {
  return (
    <div>
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <ToggleButton click={props.toggleButtonClickHandler} />
          <h1 className="toolbar-logo">Exploring Data Structures & Algorithms</h1>
          <div className="spacer"></div>
          <ul className="toolbar-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/code">
              <li>Code</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Toolbar

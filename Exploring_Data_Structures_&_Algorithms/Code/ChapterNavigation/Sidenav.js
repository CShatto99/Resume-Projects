import React from 'react'
import {Link} from 'react-router-dom'
import ToggleButton from './ToggleButton'
import SideNavArrow from './SideNavArrow'

function Sidenav(props) {
  let sidenavClasses = 'code_page-sidenav'
  if(props.show) {
    sidenavClasses = 'code_page-sidenav open'
  }
  return (
    <nav className={sidenavClasses}>

        <h3 className="sidenav-title">Topics:</h3>

      <nav className="sidenav-topics">
        <ul>
          <Link to="/stacksandqueues">
            <li>Stacks and Queues</li>
            <div className="spacer"></div>
            <SideNavArrow />
          </Link>
          <Link to="/linkedlists">
            <li>Linked Lists</li>
            <div className="spacer"></div>
            <SideNavArrow />
          </Link>
          <Link to="/recursion">
            <li>Recursion</li>
            <div className="spacer"></div>
            <SideNavArrow />
          </Link>
          <Link to="/advancedsorting">
            <li>Advanced Sorting</li>
            <div className="spacer"></div>
            <SideNavArrow />
          </Link>
          <Link to="/binarysearchtrees">
            <li>Binary Search Trees</li>
            <div className="spacer"></div>
            <SideNavArrow />
          </Link>
          <Link to="/trees234">
            <li>2-3-4 Trees</li>
            <div className="spacer"></div>
            <SideNavArrow />
          </Link>
          <Link to="/hashtables">
            <li>Hash Tables</li>
            <div className="spacer"></div>
            <SideNavArrow />
          </Link>
          <Link to="/heaps">
            <li>Heaps</li>
            <div className="spacer"></div>
            <SideNavArrow />
          </Link>
          <Link to="/graphs">
            <li>Graphs</li>
            <div className="spacer"></div>
            <SideNavArrow />
          </Link>
          <Link to="/weightedgraphs">
            <li>Weighted Graphs</li>
            <div className="spacer"></div>
            <SideNavArrow />
          </Link>
        </ul>
      </nav>
    </nav>
  )
}

export default Sidenav

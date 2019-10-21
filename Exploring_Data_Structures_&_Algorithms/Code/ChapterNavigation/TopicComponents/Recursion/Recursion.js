import React from 'react'
import Toolbar from '../../../../Toolbar/Toolbar'
import Sidenav from '../../Sidenav'
import './Recursion.css'
import Project6_1 from './Project6_1'
import Project6_3 from './Project6_3'
import Project6_4 from './Project6_4'

class Recursion extends React.Component {
  constructor() {
    super()
    this.state = {
      sidenavOpen: true
    }
    this.toggleClickHandler = this.toggleClickHandler.bind(this)
  }

  toggleClickHandler() {
    this.setState(prevState => {
      return {
        sidenavOpen: !prevState.sidenavOpen
      }
    })
  }

  render() {

    return (
      <div className="recursion-grid">

        <Toolbar toggleButtonClickHandler={this.toggleClickHandler} />

        <Sidenav show={this.state.sidenavOpen}/>

        <div className="recursion-title">
          <h1>Chapter 6: Recursion</h1>
        </div>

        <Project6_1 className="project-6_1-grid"/>

        <Project6_3 className="project-6_3-grid"/>

        <Project6_4 className="project-6_4-grid"/>

      </div>
    )
  }
}

export default Recursion

import React from 'react'
import Toolbar from '../../../../Toolbar/Toolbar'
import Sidenav from '../../Sidenav'
import './Graphs.css'
import Project13_1 from './Project13_1'
import Project13_2 from './Project13_2'
import Project13_3 from './Project13_3'
import Project13_4 from './Project13_4'
import Project13_5 from './Project13_5'

class Graphs extends React.Component {
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
      <div className="graphs-grid">

        <Toolbar toggleButtonClickHandler={this.toggleClickHandler} />

        <Sidenav show={this.state.sidenavOpen}/>

        <div className="graphs-title">
          <h1>Chapter 13: Graphs</h1>
        </div>

        <Project13_1 className="project-13_1-grid"/>

      </div>
    )
  }
}

export default Graphs

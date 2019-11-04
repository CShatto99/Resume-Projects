import React from 'react'
import Toolbar from '../../../../Toolbar/Toolbar'
import Sidenav from '../../Sidenav'
import './Heaps.css'
import Project12_1 from './Project12_1'
import Project12_2 from './Project12_2'
import Project12_3 from './Project12_3'
import Project12_4 from './Project12_4'
import Project12_5 from './Project12_5'

class Heaps extends React.Component {
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
      <div className="heaps-grid">

        <Toolbar toggleButtonClickHandler={this.toggleClickHandler} />

        <Sidenav show={this.state.sidenavOpen}/>

        <div className="heaps-title">
          <h1>Chapter 12: Heaps</h1>
        </div>

        <Project12_1 className="project-12_1-grid"/>

        <Project12_2 className="project-12_2-grid"/>

        <Project12_3 className="project-12_3-grid"/>

        <Project12_4 className="project-12_4-grid"/>

      </div>
    )
  }
}

export default Heaps

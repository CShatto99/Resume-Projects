import React from 'react'
import Toolbar from '../../../../Toolbar/Toolbar'
import Sidenav from '../../Sidenav'
import './Trees234.css'
import Project10_1 from './Project10_1'
import Project10_2 from './Project10_2'
import Project10_3 from './Project10_3'
import Project10_4 from './Project10_4'
import Project10_5 from './Project10_5'

class Trees234 extends React.Component {
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
      <div className="trees_234-grid">

        <Toolbar toggleButtonClickHandler={this.toggleClickHandler} />

        <Sidenav show={this.state.sidenavOpen}/>

        <div className="trees_234-title">
          <h1>Chapter 10: 2-3-4 Trees and External Storage</h1>
        </div>

        <Project10_1 className="project-10_1-grid"/>

        <Project10_3 className="project-10_3-grid"/>

      </div>
    )
  }
}

export default Trees234

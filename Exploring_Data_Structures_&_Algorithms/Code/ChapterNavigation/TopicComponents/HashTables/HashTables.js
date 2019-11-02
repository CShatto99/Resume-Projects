import React from 'react'
import Toolbar from '../../../../Toolbar/Toolbar'
import Sidenav from '../../Sidenav'
import './HashTables.css'
import Project11_1 from './Project11_1'
import Project11_2 from './Project11_2'
import Project11_3 from './Project11_3'
import Project11_4 from './Project11_4'
import Project11_5 from './Project11_5'

class HashTables extends React.Component {
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
      <div className="hash_tables-grid">

        <Toolbar toggleButtonClickHandler={this.toggleClickHandler} />

        <Sidenav show={this.state.sidenavOpen}/>

        <div className="hash_tables-title">
          <h1>Chapter 11: Hash Tables</h1>
        </div>

        <Project11_1 className="project-11_1-grid"/>

        <Project11_2 className="project-11_2-grid"/>

        <Project11_3 className="project-11_3-grid"/>

        <Project11_4 className="project-11_4-grid"/>

        <Project11_5 className="project-11_5-grid"/>

      </div>
    )
  }
}

export default HashTables

import React from 'react'
import Toolbar from '../../../../Toolbar/Toolbar'
import Sidenav from '../../Sidenav'
import './AdvancedSorting.css'
import Project7_1 from './Project7_1'
import Project7_2 from './Project7_2'
import Project7_3 from './Project7_3'
import Project7_4 from './Project7_4'
import Project7_5 from './Project7_5'

class AdvancedSorting extends React.Component {
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
      <div className="advanced_sorting-grid">

        <Toolbar toggleButtonClickHandler={this.toggleClickHandler} />

        <Sidenav show={this.state.sidenavOpen}/>

        <div className="advanced_sorting-title">
          <h1>Chapter 7: Advanced Sorting</h1>
        </div>

        <Project7_1 className="project-7_1-grid"/>

        <Project7_2 className="project-7_2-grid"/>

        <Project7_3 className="project-7_3-grid"/>

        <Project7_4 className="project-7_4-grid"/>

        <Project7_5 className="project-7_5-grid"/>

      </div>
    )
  }
}

export default AdvancedSorting

import React from 'react'
import Toolbar from '../../../../Toolbar/Toolbar'
import Sidenav from '../../Sidenav'
import './LinkedLists.css'
import Project5_1 from './Project5_1'
import Project5_2 from './Project5_2'
import Project5_3 from './Project5_3'
import Project5_4 from './Project5_4'
import Project5_5 from './Project5_5'

class LinkedLists extends React.Component {
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
      <div className="linked_lists-grid">

        <Toolbar toggleButtonClickHandler={this.toggleClickHandler} />

        <Sidenav show={this.state.sidenavOpen}/>

        <div className="linked_lists-title">
          <h1>Chapter 5: Linked Lists</h1>
        </div>

        <Project5_1 className="project-5_1-grid"/>

        <Project5_2 className="project-5_2-grid"/>

        <Project5_3 className="project-5_3-grid"/>

        <Project5_4 className="project-5_4-grid"/>

        <Project5_5 className="project-5_5-grid"/>

      </div>
    )
  }
}

export default LinkedLists

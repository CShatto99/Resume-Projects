import React from 'react'
import Toolbar from '../../../../Toolbar/Toolbar'
import Sidenav from '../../Sidenav'
import './StacksAndQueues.css'
import Project4_1 from './Project4_1'
import Project4_2 from './Project4_2'
import Project4_3 from './Project4_3'
import Project4_4 from './Project4_4'
import Project4_5 from './Project4_5'

class StacksAndQueues extends React.Component {
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
      <div className="stacks_and_queues-grid">

        <Toolbar toggleButtonClickHandler={this.toggleClickHandler} />

        <Sidenav show={this.state.sidenavOpen}/>

        <div className="stacks_and_queues-title">
          <h1>Chapter 4: Stacks and Queues</h1>
        </div>

        <div className="stacks_and_queues-description">
          <p>
            In Chapter 4 we are going to be covering topics of stacks and queues.
            The code that appears on this page will not cover the implementation
            of these data strucutes, but rather the additional code that has been
            added to complete the project that is specified by the instructions
            located in the textbook. To keep the code relatively simple, I have
            only included the bare minimum code to make the projects functional.
            Also, all project descriptions will include the complete project files.
          </p>
        </div>

        <Project4_1 className="project-4_1-grid"/>

        <Project4_2 className="project-4_2-grid"/>

        <Project4_3 className="project-4_3-grid"/>

        <Project4_4 className="project-4_4-grid"/>

        <Project4_5 className="project-4_5-grid"/>

      </div>
    )
  }
}

export default StacksAndQueues

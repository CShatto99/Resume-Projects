import React from 'react'
import Toolbar from '../Toolbar/Toolbar'
import Sidenav from './ChapterNavigation/Sidenav'
import './ChapterNavigation/Sidenav.css'
import './Code.css'

import hashTableVisual from './CodeImgs/hashTableVisual.png'
import graphVisual from './CodeImgs/graphVisual.png'
import bstVisual from './CodeImgs/bstVisual.png'
import linkedListVisual from './CodeImgs/linkedListVisual.png'
import stackVisual from './CodeImgs/stackVisual.png'

const Code = (props) => {
  return (
    <div className="code-grid">
      <Sidenav show={props.showSidenav}/>

      <div className="code-title">
        <h1>Introduction</h1>
      </div>

      <div className="code-description">
        <p>The code on this website will be covering the project assignments that
           are given at the end of each chapter in the "Data Structures & Algorithms
           in Java, Second Edition" textbook.</p>
           <br/>
           <br/>
        <p>The topics that will be covered include: Stacks, Queues, Linked Lists,
           Recursion, Advanced Sorting, Binary Search Trees, 2-3-4 Trees, Hash Tables,
           Heaps, Graphs and Weighted Graphs. These topics are concurrent with the
           chapters contained in the textbook</p>
           <br/>
           <br/>
        <p>You may start viewing the code through the side navigation bar by clicking
           on the white menu icon in the top left of the screen. The side navigation
           can also be collapsed by clicking on the same menu icon.</p>
      </div>

      <div className="code-image">
        <img style={{width: '180px'}} src={hashTableVisual} />
        <img style={{width: '180px'}} src={graphVisual} />
        <img style={{width: '180px'}} src={bstVisual} />
        <img style={{width: '180px'}} src={linkedListVisual} />
        <img style={{width: '180px'}} src={stackVisual} />
      </div>

      <div className="hr"><hr/></div>
    </div>
  )
}

export default Code

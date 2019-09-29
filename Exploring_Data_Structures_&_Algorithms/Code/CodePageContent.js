import React from 'react'
import './CodePageContent.css'

import hashTableVisual from './CodeImgs/hashTableVisual.png'
import graphVisual from './CodeImgs/graphVisual.png'
import bstVisual from './CodeImgs/bstVisual.png'
import linkedListVisual from './CodeImgs/linkedListVisual.png'
import stackVisual from './CodeImgs/stackVisual.png'

const CodePageContent = () => {
  return (
    <div className="code-page-grid">

      <div className="code-page-description">
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

      <div className="code-page-image">
        <img style={{width: '180px'}} src={hashTableVisual} />
        <img style={{width: '180px'}} src={graphVisual} />
        <img style={{width: '180px'}} src={bstVisual} />
        <img style={{width: '180px'}} src={linkedListVisual} />
        <img style={{width: '180px'}} src={stackVisual} />
      </div>

      <div className="code-page-hr">
        <hr/>
      </div>

    </div>
  )
}

export default CodePageContent

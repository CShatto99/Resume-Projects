import React from 'react'
import Toolbar from '../Toolbar/Toolbar'
import Sidenav from './ChapterNavigation/Sidenav'
import './ChapterNavigation/Sidenav.css'
import './Code.css'
import CodePageContent from './CodePageContent'



const Code = (props) => {
  return (
    <div className="code-grid">
      <Sidenav show={props.showSidenav}/>

      <div className="code-page-title">
        <h1>Introduction</h1>
      </div>

      <CodePageContent className="code-page-grid"/>

    </div>
  )
}

export default Code

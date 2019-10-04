import React from "react"
import "./ToggleButton.css"

function ToggleButton(props) {
  return (
    <div className="sidenav-toggle_button">
      <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    </div>
  )
}

export default ToggleButton

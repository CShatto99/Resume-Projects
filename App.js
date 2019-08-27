import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Toolbar from "./components/Toolbar/Toolbar"
import Home from "./components/Home/Home"
import Code from "./components/Code/Code"
import Contact from "./components/Contact/Contact"

import Stacks from './components/Code/ChapterNavigation/TopicComponents/Stacks'
import Queues from './components/Code/ChapterNavigation/TopicComponents/Queues'


function App() {
  return (
    <Router>
      <div>
        <Toolbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/code" component={Code} />
          <Route path="/contact" component={Contact} />
          <Route path="/stacks" component={Stacks} />
          <Route path="/queues" component={Queues} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

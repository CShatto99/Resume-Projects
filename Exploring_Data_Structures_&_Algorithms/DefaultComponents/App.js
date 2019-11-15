import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Toolbar from "./components/Toolbar/Toolbar"
import Home from "./components/Home/Home"
import Code from "./components/Code/Code"
import Contact from "./components/Contact/Contact"

import StacksAndQueues from './components/Code/ChapterNavigation/TopicComponents/StacksAndQueues/StacksAndQueues'
import LinkedLists from './components/Code/ChapterNavigation/TopicComponents/LinkedLists/LinkedLists'
import Recursion from './components/Code/ChapterNavigation/TopicComponents/Recursion/Recursion'
import AdvancedSorting from './components/Code/ChapterNavigation/TopicComponents/AdvancedSorting/AdvancedSorting'
import BinaryTrees from './components/Code/ChapterNavigation/TopicComponents/BinaryTrees/BinaryTrees'
import Trees234 from './components/Code/ChapterNavigation/TopicComponents/Trees234/Trees234'
import HashTables from './components/Code/ChapterNavigation/TopicComponents/HashTables/HashTables'
import Heaps from './components/Code/ChapterNavigation/TopicComponents/Heaps/Heaps'
import Graphs from './components/Code/ChapterNavigation/TopicComponents/Graphs/Graphs'
import WeightedGraphs from './components/Code/ChapterNavigation/TopicComponents/WeightedGraphs/WeightedGraphs'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sidenavOpen: false
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
      <Router>
        <div>
        <Toolbar toggleButtonClickHandler={this.toggleClickHandler}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/code" render={(props) => <Code showSidenav={this.state.sidenavOpen} />}/>
            <Route path="/contact" component={Contact} />
            <Route path="/stacksandqueues" component={StacksAndQueues} />
            <Route path="/linkedlists" component={LinkedLists} />
            <Route path="/recursion" component={Recursion} />
            <Route path="/advancedsorting" component={AdvancedSorting} />
            <Route path="/binarysearchtrees" component={BinaryTrees} />
            <Route path="/trees234" component={Trees234} />
            <Route path="/hashtables" component={HashTables} />
            <Route path="/heaps" component={Heaps} />
            <Route path="/graphs" component={Graphs} />
            <Route path="/weightedgraphs" component={WeightedGraphs} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

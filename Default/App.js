import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Toolbar from "./components/Toolbar/Toolbar"
import Home from "./components/Home/Home"
import Code from "./components/Code/Code"
import Contact from "./components/Contact/Contact"

import Stacks from './components/Code/ChapterNavigation/TopicComponents/Stacks'
import Queues from './components/Code/ChapterNavigation/TopicComponents/Queues'
import LinkedLists from './components/Code/ChapterNavigation/TopicComponents/LinkedLists'
import Recursion from './components/Code/ChapterNavigation/TopicComponents/Recursion'
import AdvancedSorting from './components/Code/ChapterNavigation/TopicComponents/AdvancedSorting'
import BinarySearchTrees from './components/Code/ChapterNavigation/TopicComponents/BinarySearchTrees'
import Trees234 from './components/Code/ChapterNavigation/TopicComponents/Trees234'
import HashTables from './components/Code/ChapterNavigation/TopicComponents/HashTables'
import Heaps from './components/Code/ChapterNavigation/TopicComponents/Heaps'
import Graphs from './components/Code/ChapterNavigation/TopicComponents/Graphs'
import WeightedGraphs from './components/Code/ChapterNavigation/TopicComponents/WeightedGraphs'

class App extends React.Component {
  render() {
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
            <Route path="/linkedlists" component={LinkedLists} />
            <Route path="/recursion" component={Recursion} />
            <Route path="/advancedsorting" component={AdvancedSorting} />
            <Route path="/binarysearchtrees" component={BinarySearchTrees} />
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

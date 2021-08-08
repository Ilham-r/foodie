
import './App.css';
import Hero from './components/Hero';
import Detail from './components/Hero/Detail.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    
      <Router >
        <Switch>
          <Route path="/" component={Hero} exact />
          <Route path="/Detail/:name" component={Detail} exact />
        </Switch>

      </Router>

  )
}

export default App;

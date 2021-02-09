import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import HomePortfolio from './pages/HomePortfolio/HomePortfolio';

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" component={HomePortfolio} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

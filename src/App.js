import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Vehicles from './pages/Vehicles/Vehicles';
import Customers from './pages/Customers/Customers';
import Available from './pages/Available/Available';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/vehicles" exact component={Vehicles} />
          <Route path="/customers" exact component={Customers} />
          <Route path="/available" exact component={Available} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

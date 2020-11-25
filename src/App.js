import './App.css';
import Appbar from './Components/Appbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import TodoDetails from './Components/TodoDetails';
function App() {
  return (
    <Router>
    
      <Switch>
        <Route exact path="/" children={<Appbar />} />
          <Route exact path="/:id" children={<TodoDetails />} />
        </Switch>
    </Router>
  );
}

export default App;

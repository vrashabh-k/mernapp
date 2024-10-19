import './App.css';
import Home from './screens/Home';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup.js';
import { CardProvider } from './components/ContextReducer.js';

function App() {
  return (
    <CardProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/creatuser" element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
    </CardProvider>
  );
}

export default App;

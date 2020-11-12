// STYLING
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// IMPORT PAGES 
import ContactPage from './pages/ContactPage';
import PorfolioPage from './pages/PortfolioPage';
import Home from './pages/Home';

// IMPORTING COMPONENTS 
import About from './components/About';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">

        <NavBar /> 

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={ContactPage}/>
            <Route exact path="/portfolio" component={PorfolioPage}/>
            <Route exact path="/about" component={About}/>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}



export default App;

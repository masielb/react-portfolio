// STYLING
import './App.css';

import { HashRouter as Router, Route, Switch } from "react-router-dom";

// IMPORT PAGES 
import Home from './pages/Home';
import PorfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

// IMPORTING COMPONENTS 
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>

        <NavBar /> 

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={ContactPage}/>
            <Route exact path="/portfolio" component={PorfolioPage}/>
            <Route exact path="/about" component={About}/>
        </Switch>

        <Footer />

    </Router>
  );
}



export default App;

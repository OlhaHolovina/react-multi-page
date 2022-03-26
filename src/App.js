import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Forecast from "./components/pages/Forecast";
import { BrowserRouter as Router } from "react-router-dom";
import Contacts from "./components/pages/Contacts";

function App() {
  return (
    <Router>
      <section className='app'>
        <Header />
          <Switch>
            <Route exact path="/">
              <Forecast />
            </Route>
            <Route path='/contacts'>
              <Contacts />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        <Footer />
      </section>
    </Router>
  );
}

export default App;

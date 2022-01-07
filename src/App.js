import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
// import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Switch>
    <Route path= "/shop">
      <Shop/>
      <Prices/>
      </Route>
    {/* <Route exact path="/menu" component={Menu} /> */}
    <Route exact path="/shop" component={Shop} />
    <Route exact path="/about" component={About} />
    {/* <Route exact path="/prices" component={Prices} /> */}
    <Route>
      <Header/>
      <Clients/>
      </Route>  
    {/* <Route exact path="/" component={Clients} /> */}
    </Switch>
    </Router>
      {/* <Header /> */}
      {/* <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices /> */}
    
    </div>
  );
}

export default App;

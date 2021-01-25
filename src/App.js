import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Products from "./pages/Products";
import Jobs from "./pages/Jobs";
import Contacts from "./pages/Contacts";
import Navbar from './components/Navbar';
import React from "react";
function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>

        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/jobs' component={Jobs}/>
        <Route exact path='/contacts' component={Contacts}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

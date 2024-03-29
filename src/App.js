import React from "react";
import { HashRouter , Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";
import "./App.css";

function App(){
  //Navigation is executed in Router Component<Link>
  return (
  <HashRouter> 
    <Navigation />
    <Route path="/" exact = {true} component={Home}/>
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
  );
}

export default App;
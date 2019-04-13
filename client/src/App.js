import React, { Component } from "react";
import Body from "./component/body";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Specialites from "./component/specialites";
import TousLesSpecialites from "./component/TousLesSpecialites";
import DetailsSpecialite from "./component/detailsSpecialite";

import Footer from "./component/footer";
import Profile from "./component/profile";

class App extends Component {

  componentWillMount(){
    //localStorage.removeItem("token")
  }
 
 
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
              <Route path="/" component={Body} exact />
              <Route path="/Specialites" component={Specialites} exact />
              <Route path="/TousSpecialites" component={TousLesSpecialites} exact />
              <Route path="/DetailsSpecialite" component={DetailsSpecialite} exact />
              <Route path="/Profile" component={Profile} exact />
          </Switch>
          <Footer />
        </BrowserRouter>
          
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListProductComponent from './components/ListProductComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListProductComponent}></Route>
                          <Route path = "/Products" component = {ListProductComponent}></Route>
                          <Route path = "/add-Product/:id" component = {CreateProductComponent}></Route>
                          <Route path = "/view-Product/:id" component = {ViewProductComponent}></Route>
                          {/* <Route path = "/update-Product/:id" component = {UpdateProductComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;

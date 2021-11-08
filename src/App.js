import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import User from './components/User';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="container-xxl">
      <Navbar />
      <User 
      name="Yunus Bostan" 
      salary="15000"
      department="Bilişim"
      />
        <User 
      name="Tuğçe Bostan" 
      />
      </div>
    ) 
  } 
}

export default App;

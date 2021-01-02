import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Navbars from './components/layout/Navbars';

function App() 
{
  const [mydata, setmyData] = useState([]);

  useEffect(() => 
  {
      axios.get('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=34dd5c20a7704859ac3e6239bae6ca36')
      .then(res => {
        //console.log(res.data.articles) //upto their array
        setmyData(res.data.articles)
      })
      .catch(err => {
        console.log(err);
      })
  },[])

    return (
      <div className="App">
        <Navbars/>
          <div className="container">
              <Home name={mydata} />
          </div>
      </div>
      );
}

export default App;

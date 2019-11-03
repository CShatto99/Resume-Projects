import React from 'react';
import './Home.css'
import HomePageContent from './HomePageContent'

const Home = () =>{
  return (
    <div className="home-grid">

      <div className="home-page-title">
        <h1>The Purpose of This Website</h1>
      </div>

      <HomePageContent className="home-page-grid"/>

    </div>
  )
}


export default Home;

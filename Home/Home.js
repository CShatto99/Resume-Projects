import React from 'react';
import './Home.css'
import textbook from './ds&a.jpg'

class Home extends React.Component {
  render() {
    return (
      <div className="home_page-grid">
      
        <div className="home_page-title">
          <h1>The Purpose of This Website</h1>
        </div>
        <div className="home_page-description">
          <p>Before you dive into the content of this website, you must be aware one caveat.
             This website was not created to teach the fundamentals of Data Structures & Algorithms,
             but to expand on and look at more advanced applications of these topics.
          </p>
          <br/>
          <br/>
          <p>If you are interested in learning the fundamentals,
             click on the text located below the picture of the textbook.
          </p>
          <br/>
          <br/>
          <p>Also, the beginning chapters in this website differ from the content of the textbook.
             Chapters such as one, two, and three will not be covered due to their simplicity.
          </p>
        </div>
        <div className="home_page-image">
          <img style={{width: '300px'}} src={textbook} alt="Data Structures and Algorithms in Java, 2nd Edition" />
          <a href="https://www.amazon.com/Data-Structures-Algorithms-Java-2nd/dp/0672324539" target="blank">Data Structures & Algorithms in Java, 2nd Edition</a>
        </div>
      </div>
    )
  }
}


export default Home;

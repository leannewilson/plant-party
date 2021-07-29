import React from "react";
import myllie from "../assests/myllie-pic.jpg";

function About(props) {

    let styleImg = {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        backgroundColor: '#8BA63A'
    }

  return (
    <div className="About">
      <div className="plantMoms">
        <div>
            <div style={styleImg}></div> 
            {/* delete the entire div line about and add image to tag below and uncomment it out */}
            {/* <img src={myllie} style={styleImg}/> */}
          <h2>Leanne</h2>
          <h5>San Diego, California</h5>
        </div>

        <div>
        <img src={myllie} style={styleImg}/>
          <h2>Myllie</h2>
          <h5>Fort Lauderdale, Florida</h5>
          <p>I currently own 14 healthy plants and I'm </p>
        </div>
      </div>
      <h4>Two plant moms and developers from opposite sides of the country!</h4>

    </div>
  );
}

export default About;
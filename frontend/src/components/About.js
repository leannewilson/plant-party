import React from "react";

function About(props) {

    let styleImg = {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: '#8BA63A'
    }

  return (
    <div className="About">
      <div className="plantMoms">
        <div>
            <div style={styleImg}></div> 
          <h2>Leanne</h2>
          <h5>San Diego, California</h5>
        </div>
        <div>
        <div style={styleImg}></div>
          <h2>Myllie</h2>
          <h5>Fort Lauderdale, Florida</h5>
        </div>
      </div>
      <h4>Two plant moms and developers from opposite sides of the country!</h4>
    </div>
  );
}

export default About;
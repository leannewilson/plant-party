import React from "react";
import myllie from "../assests/myllie-pic.jpg";
import leanne from "../assests/leannephoto.jpeg";

function About(props) {
  let styleImg = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    backgroundColor: "#8BA63A",
  };

  return (
    <div className="About">
      <div className="plantMoms">
        <div>
          <img src={leanne} style={styleImg} />
          <h2>Leanne</h2>
          <h5>San Diego, California</h5>
          <p>
            Proud plant mom with a love for propagation. My apartment is draped
            in Pothos and there is always a pile of dirt at my front door. I
            don't like to pick favorites... but currently I can't keep my eye
            off my alocasia sanderiana which I've nicknamed my Dracula plant.
          </p>
        </div>

        <div>
          <img src={myllie} style={styleImg} />
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

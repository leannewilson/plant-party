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

  let nameColor = { color: "rgb(104, 141, 12)" };

  return (
    <div className="About">
      <h4 style={{ textAlign: "center", fontStyle: "italic" }}>
        Two plant moms and developers from opposite sides of the country!
      </h4>
      <div className="plantMoms">
        <div className="mom">
          <img src={leanne} style={styleImg} />
          <h2 style={nameColor}>Leanne</h2>
          <h5>San Diego, California</h5>
          <p>
            Proud plant mom with a love for propagation. My apartment is draped
            in Pothos and there is always a pile of dirt at my front door. I
            don't like to pick favorites... but currently I can't keep my eye
            off my alocasia sanderiana which I've nicknamed my Dracula plant.
          </p>
        </div>
        <div className="mom">
          <img src={myllie} style={styleImg} />
          <h2 style={nameColor}>Myllie</h2>
          <h5>Fort Lauderdale, Florida</h5>
          <p>
            I currently own 14 healthy plants and I'm in the process of adding
            more to the family! Even though I find myself running out of space,
            it's impossible to have too many plants. I'm in love with my snake
            plants, silver squill and I can't wait to see my small birds of
            paradise grow tall and beautiful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";

function Maintenance(props) {
  return (
    <div>
      <h1>Plant Parenthood 101</h1>
      <div className="plant-care">
        <span className="plant-care-boxes">
          <h3>WATER</h3>
          <p>
            <span>
              Dipping your finger regularly in the top layer of soil is the best
              way to monitor the watering needs of your plant. Note that
              seasonal differences will effect watering frequency. You will
              generally need to reduce watering in the cooler months.
            </span>
            <hr></hr>
            LOW Water roughly once a fortnight or when the majority of the soil
            has dried out.
            <hr></hr>
            MODERATE Water roughly once a week when the first 5cm (2 in) of soil
            has dried out.
            <hr></hr>
            HIGH Water roughly twice a week when the soil surface has dried out.
            <hr></hr>
            MISTING Spritz your plants using a spray bottle filled with water
            once a week or so, to increase humidity levels.
          </p>
        </span>
        <span className="plant-care-care">
          <h3>CARE</h3>
          <p>
            <span>
              General plant maintenance means regularly checking in on your
              foliage friends to ensure good health.
            </span>
            <hr></hr>
            WIPING LEAVES to remove a build up of dust. Should be done monthly
            with a damp cloth or alternatively give your plant a shower!
            <hr></hr>
            WHITE OIL is great to have on hand to deter pests and keep leaves
            nice and shiny.
            <hr></hr>
            FERTILISE during the active growth period of spring and summer to
            give plants and extra boost. Liquid or slow release fertiliser is
            best for indoor plants. Always err on the side of caution and dilute
            more than the product instructions suggest. Choose a fertiliser that
            is specific to your type of plant (ie. tropical, succulent or
            cactus) and keep in mind that plants bought fresh from us or the
            nursery are full of nutrients and won't require fertilising for 6-12
            months.
          </p>
        </span>
        <span className="plant-care-boxes">
          <h3>LIGHT</h3>
          <p>
            <span>
              Be aware that light conditions will vary from season to season.
              Repositioning plants accordingly to ensure that their light needs
              are consistently being met.
            </span>
            <hr></hr>
            LOW - MODERATE Tolerant of shady conditions, but will also thrive in
            bright, indirect light.
            <hr></hr>
            BRIGHT, INDIRECT Enjoys a position that receives diffuse bright
            light; avoid direct sunlight.
            <hr></hr>
            BRIGHT, DIRECT Enjoys bright light and will tolerate and appreciate
            direct morning sun.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Maintenance;

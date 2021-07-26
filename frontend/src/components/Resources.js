import React from "react";
import Maintenance from "./Maintenance";

function Resources(props) {
  let postHeight = {
    height: "315px",
  };

  return (
    <div className="Resources">
      {/* <Maintenance /> */}
      <section className="blogs">
        <h2>BLOGS</h2>
        <div className="blog-links">
          <a href="https://www.greenobsessions.com/">Green Obsessions</a>
          <a href="https://www.urbanjunglebloggers.com/">
            Urban Jungle Bloggers
          </a>
          <a href="https://www.houseplantjournal.com/">House Plant Journal</a>
          <a href="https://www.thesill.com/">The Sill</a>
          <a href="https://cleverbloom.com/">Cleverbloom</a>
          <a href="https://thankyourgarden.com/">Thank You Garden</a>
        </div>
      </section>

      <section className="videos">
        <h2>VIDEOS</h2>
        <div className="videos-list">
          <div>
            <h3>14 Essential Houseplant Care Tips | PLANTERINA</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Zoim8TXhzRE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <h3>Houseplant Care Routine! | HARLI G</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wicsZPtk4Bw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h3>Easy House Plants For Beginners | CRAZY PLANT GUY</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FaAU_Hxg6tU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h3>Houseplant Sanctuary In The Bronx | SUMMER RAYNE OAKES</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Y-Tksy0g9gc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h3>IKEA Products That Can Be Used For Plants | BENJIPLANT</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IiQPjZP26Gs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h3>Houseplant Tour (400+ Plants) | NICK PILEGGI</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8jCULuAd_5w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h3>Succulents For Beginners Tips & Tricks | MIND THE LEAVES</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/k7Cmhrzl5jg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h3>How To Make An Indoor Water Garden | GARDEN ANSWER</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PRoHErzVPyU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h3>Air Plants (Tillandsia) 101 | MOUNTAIN CREST GARDEN</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oOo9p9lO2TA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;

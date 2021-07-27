// import { useContext, useState, useEffect } from "react";
// import TheContext from "../TheContext";
// import axios from "axios";
// import heartOutline from "../assests/heartOutline.png";
// import redHeart from "../assests/redHeart.png";

// function LikeButton(props) {
//   let { user, setUser } = useContext(TheContext);

//   let [likedPlants, setLikedPlants] = useState(false);

//   useEffect(() => {
//     console.log(user);
//   }, []);

//   return (
//     <div>
//       <img
//         className="saved-icon"
//         //   onClick={() => savePlant(eachPlant)}
//         src={heartOutline}
//         style={{ width: "2em" }}
//         alt="save this plant to favorites"
//       />
//       {/* <img
//           className="saved-icon"
//           //   onClick={() => removePlant(eachPlant)}
//           src={redHeart}
//           style={{ width: "2em" }}
//           alt="remove this plant from favorites"
//         /> */}
//     </div>
//   );
// }

// export default LikeButton;

/**WHERE WE DO ALL OF OUR BACKEND CONNECTIONS */

import axios from "axios";

console.log(process.env);

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://plant-party.herokuapp.com/api"
    : `http://localhost:5000/api`;
console.log(serverUrl);
const createHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
};

const actions = {
  getUser: async () => {
    return await axios.get(`${serverUrl}/get-the-user`, createHeaders());
  },

  savePlant: async (data) => {
    return await axios.post(`${serverUrl}/savedplants`, data, createHeaders());
  },

  removePlant: async (data) => {
    return await axios.post(`${serverUrl}/removeplants`, data, createHeaders());
  },

  GetFavPlants: async () => {
    return await axios.get(`${serverUrl}/profile`, createHeaders());
  },

  getPlantsFromServer: async () => {
    return await axios.get(`${serverUrl}/getplantsfromserver`, createHeaders());
  },

  addPlant: async (data) => {
    return await axios.post(`${serverUrl}/add-plant`, data, createHeaders());
  },

  addPost: async (post) => {
    let res = await axios.post(`${serverUrl}/add-post`, post, createHeaders());
    return res;
  },
  getAllPosts: async (post) => {
    return await axios.get(`${serverUrl}/all-the-posts`, createHeaders());
  },

  saveSuggestion: async (suggestion) => {
    return await axios.post(
      `${serverUrl}/suggestions`,
      suggestion,
      createHeaders()
    );
  },

  getSuggestions: async () => {
    return await axios.get(`${serverUrl}/suggestions`, createHeaders());
  },

  removeSuggestion: async (suggestionID) => {
    console.log(suggestionID);
    return await axios.delete(
      `${serverUrl}/suggestions?id=${suggestionID}`,
      createHeaders()
    );
  },

  addComment: async (comment) => {
    return await axios.post(`${serverUrl}/comment`, comment, createHeaders());
  },

  // getComments: async (post) => {
  //   return await axios.get(`${serverUrl}/all-the-posts`, createHeaders());
  // },

  authenticate: async (profileObj) => {
    console.log(profileObj, "profileObj");
    let res = await axios.post(
      `${serverUrl}/authenticate`,
      profileObj,
      createHeaders()
    );
    console.log(res);
    localStorage.setItem("token", res.data.token);

    return res;
  },
};

export default actions;

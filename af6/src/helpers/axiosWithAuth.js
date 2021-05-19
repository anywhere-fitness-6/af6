import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

const axiosWithAuth = () => {
  // returns a new "instance" of axios with the
  // config object built into it
  return axios.create({
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    baseURL: "https://reqres.in",
    // sub with actual API
  });
};

export default axiosWithAuth;
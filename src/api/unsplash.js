import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 76c10ac1da41dff0e2f2dc4ef2dc170085a63975b4943643a87881776feee804"
  }
});

const Axios = require("axios");
const spotifyRequestURI = "https://api.spotify.com/v1";
const client_id = process.env.CLIENT_ID || null;
const client_secret = process.env.CLIENT_SECRET || null;

const AlbumController = {
  getAlbum: async (req, res, next) => {
    // get album information
    const { token } = req.cache || null;
    console.log("Here is token ", token);
    if (token === null) return res.redirect("/login");
    const endpoint = "/me/top/tracks";
    let albumData;

    try {
      albumData = await Axios.get(spotifyRequestURI + endpoint, {
        headers: createHeader(token),
      });
    } catch (err) {
      next(err);
      console.error(err);
      return;
    }

    res.json({ data: albumData.data });
  },
};

const createHeader = (token) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};

module.exports = AlbumController;

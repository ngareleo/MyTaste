const app = require("express");
const router = app.Router();
const AlbumController = require("./controllers/album.controller");

const head = "spotify";
router.get(`/${head}`, AlbumController.getAlbum);

module.exports = router;

var express = require('express');
var router = express.Router();
const Client = require("../models/Clientt");

/* GET client by name */
router.get("/:name", async function(req, res) {
  const client = await Client.findOne({ name: req.params.name });
  res.json(client);
});

module.exports = router;

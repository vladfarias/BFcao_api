const express = require('express');
const walkerController = require('./../controllers/walkerController');
const router = express.Router();

router
.route('/')
.get(walkerController.getAllWalker)
.post(walkerController.createWalker);

router
.route('/')
.get(walkerController.getWalker)
.patch(walkerController.updateWalker)
.delete(walkerController.deleteWalker);

module.exports = router;
const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');



router.post('/postData', activityController.postActivity);
router.get('/getAll', activityController.getActivity);

module.exports = router;

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

// router.use('/api', apiRoutes);



router.use('/api', apiRoutes);
router.use('/', homeRoutes);



// for country pages


module.exports = router;

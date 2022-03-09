
const router = require('express').Router();

const apiRoutes = require('./api');


router.use('/api', apiRoutes);

const homeRoutes = require('./home-routes.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);


// for country pages


module.exports = router;

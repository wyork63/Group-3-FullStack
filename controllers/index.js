
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

const homeRoutes = require('./home-routes.js');

const addPostRoutes = require('./add-post-routes');

router.use('/dashboard', addPostRoutes);

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

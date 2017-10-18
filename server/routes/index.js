const router = require('express').Router();
const catRoutes = require('./cats');
const userRoutes = require('./users');

module.exports = router

router.use('/cats', catRoutes);
router.use('/users', userRoutes);

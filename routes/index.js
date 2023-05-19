const express = require('express');
const router = express.Router();
const passport = require('passport');

router.use('/', require('./swagger'));

router.use('/employees', require('./employees'));
router.use('/deli', require('./deli'));

router.get('/login', passport.authenticate('github'), (req, res) => { });

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;
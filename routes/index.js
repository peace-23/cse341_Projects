const router = require('express').Router();
const passport = require('passport');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger.json');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));


router.use('/', require('./swagger'));
router.use('/students', require('./students'));
router.use('/courses', require('./courses'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});


module.exports = router;

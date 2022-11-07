const router = require('express').Router();
const apiAutoresRouter = require('./api/autores');
const apiPostsRouter = require('./api/posts');


router.use('/autores', apiAutoresRouter);
router.use('/posts', apiPostsRouter);
module.exports = router;
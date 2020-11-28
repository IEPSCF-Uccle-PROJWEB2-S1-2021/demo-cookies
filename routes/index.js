const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/cookie/set', (req, res, next) => {
  res.cookie('mycookie', '1234');
  res.render('cookieSet', { title: 'Cookie setter' });
});

router.get('/cookie/read', (req, res, next) => {
  const cookieValue = req.cookies.mycookie;
  res.render('cookieRead', { title: 'Cookie reader', cookieValue });
});

module.exports = router;

const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const themeFlavor = req.cookies.theme;
  res.render('index', { title: 'Express', theme: themeFlavor });
});

router.get('/anotherPage', (req, res, next) => {
  const themeFlavor = req.cookies.theme;
  res.render('anotherPage', { title: 'Another webpage', theme: themeFlavor });
});

router.post('/theme', (req, res, next) => {
  const themeFlavor = req.body.flavor;
  res.cookie('theme', themeFlavor, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'Strict',
  });
  res.redirect('/');
});

module.exports = router;

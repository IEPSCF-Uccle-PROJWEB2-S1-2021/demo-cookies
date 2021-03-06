const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const themeFlavor = req.signedCookies.theme;
  res.render('index', { title: 'Express', theme: themeFlavor });
});

router.get('/anotherPage', (req, res, next) => {
  const themeFlavor = req.signedCookies.theme;
  res.render('anotherPage', { title: 'Another webpage', theme: themeFlavor });
});

const DAY_AS_MS = 24 * 60 * 60 * 1000;

router.post('/theme', (req, res, next) => {
  const themeFlavor = req.body.flavor;
  res.cookie('theme', themeFlavor, {
    maxAge: 100 * DAY_AS_MS,
    httpOnly: true,
    sameSite: 'Strict',
    signed: true,
  });
  res.redirect('/');
});

module.exports = router;

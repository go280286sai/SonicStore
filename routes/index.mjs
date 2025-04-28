import { Router } from 'express';
const router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index.njk', { title: 'Sonic Store', active: 'home' });
});
router.get('/about', function(req, res, next) {
  res.render('about.njk', { title: 'ABOUT', active: 'about' });
});
router.get('/products', function(req, res, next) {
  res.render('products.njk', { title: 'OUR PRODUCTS', active: 'products' });
});
router.get('/videogames', function(req, res, next) {
  res.render('video.njk', { title: 'VIDEO GAMES', active: 'video' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact.njk', { title: 'CONTACT US', active: 'contact' });
});


export default router;
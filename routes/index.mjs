import { Router } from 'express';
const router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sonic Store', active: 'home' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'ABOUT', active: 'about' });
});
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'OUR PRODUCTS', active: 'products' });
});
router.get('/videogames', function(req, res, next) {
  res.render('video', { title: 'VIDEO GAMES', active: 'video' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'CONTACT US', active: 'contact' });
});


export default router;
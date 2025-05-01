import { Router } from 'express';
const router = Router();
import main from '../model/subscribe/index.mjs';
const reviews = [
  {
    text: "ОMuffin the best 💖everytime everything great, thank you 😊",
    author: "Viktoria Tumachok",
    image: "/images/women.jpeg"
  },
  {
    text: "Muffin is the best and very trust person. And has the best prices.",
    author: "DUKE",
    image: "/images/man.jpg"
  },
  {
    text: "Magnificent service ! In the muffin we believe",
    author: "Ant129",
    image: "/images/man.jpg",
  },
  {
    text: "I am so glad sonic was recommended to me. Using sonic saves so much money. I have always found them to be reliable and trustworthy. Also they are very pleasant to work with. I highly recommend them🤍",
    author: "Gigi",
    image: "/images/women.jpeg",
  },
  {
    text: "Muffin is the best. ❤️ I've never had any issues with her.",
    author: "JennaSyde82",
    image: "/images/women.jpeg",
  },
  {
    text: "I always use your services and everything has always been fast and reliable. You're super helpful ☺️",
    author: "DipzB",
    image: "/images/man.jpg",
  },
  {
    text: "Realmente tengo mucha confianza en el equipo Sonic, muy agradecido con cada compra, Muffin eres la mejor, gracias por tu atención y por la forma en que lo haces lo aprecio mucho",
    author: "KING GHOST",
    image: "/images/man.jpg",
  },
  {
    text: "Редкостный говнюк конечно, Соник. \n Но работает на все 100%!!! \n Спасибо за работу!!!",
    author: "Senor Oso",
    image: "/images/man.jpg",
  },
  {
    text: "Muffin ist eine Geschäftsfrau und sehr ehrlich und zufällasig und sie macht ein Guten Job…Ich habe viele Sachen von ihr gekauft immer ehrlich gewesen ❤️❤️💋 muffin love you🫶🏻",
    author: "Jael",
    image: "/images/women.jpeg",
  },
  {
    text: "Great sales pitch and fast response 👍🏻🙏🏻",
    author: "Muster Sonia",
    image: "/images/women.jpeg",
  },
  {
    text: "Sonic is the only one who has access to my account. They manage my farms I use them as loaders I have gotten so many things from them. 100% satisfied .",
    author: "BigMamaBella",
    image: "/images/women.jpeg",
  },
  {
    text: "I loved the freaking resources that's coming out of the farms... amazing... love love love it. Helps me so much to level up the castle.",
    author: "Gideon Lal",
    image: "/images/man.jpg",
  },
  {
    text: "Hands down best farms. I can't even eat all the rss daily! Can't be beat on price or quality",
    author: "ROKKO",
    image: "/images/man.jpg",
  },
  {
    text: "Быстрый сервис, хорошие цены, приятное общение - за пару месяцев сотрудничества увидела только плюсы.",
    author: "Angel",
    image: "/images/women.jpeg",
  },
  {
    text: "fast, available, good prices and always helpful!",
    author: "CasperThe.Ghost",
    image: "/images/man.jpg",
  },
  {
    text: "Teiega on alati rõõm töötada. Täname kiire ja kvaliteetse teeninduse eest. 🫶",
    author: "Robert",
    image: "/images/man.jpg",
  },
  {
    text: "Sonic is awesome and the service is very fast and 100% recommended",
    author: "Leesey",
    image: "/images/man.jpg",
  },
  {
    text: "I have purchased quite a bit from you and asked you to find me items. I think that you have always been honest, helpful, reliable, and kept in contact if needed if you had a 🌟 you would be my first 5",
    author: "MAC",
    image: "/images/man.jpg",
  },
  {
    text: "If anyone is considering farm management, Sonic and Muffin are superior to any other management service. \nNot only are my farms always stocked with resources, they are always there for me whenever I have a question about something as well. \nThere's been a number of times when I'm chatting in province and guess who I'm chatting with???? \nSonic/Muffin who are actually in the farm doing what they do best. \nThe level of care they display on their farms are second to none....they are the only farm management you should consider.",
    author: "David S.",
    image: "/images/man.jpg",
  },
  {
    text: "Muffin is the only one with access to my account, always quick and I don't trust anyone more than her with purchases🫶🏽",
    author: "OG Uncle Lerpz",
    image: "/images/man.jpg",
  },
  {
    text: "Excellente gestion des fermes et un grand plaisir de travaillez avec vous surtout moin de travail pour moi pour ceux qui on besoin de ferme sans se prendre la tête je vous recommande sonic et c'est magique",
    author: "Djo",
    image: "/images/man.jpg",
  },
  {
    text: "Bevor ich zu Sonic kam, hatte ich mit 5 anderen Farm Managern gearbeitet. Sonic ist nicht nur besser – es ist außergewöhnlich. Man hat nicht nur gutes Management, sondern auch einen proaktiven Ansprechpartner, der hilft und Ideen unterstützt. Danke, Muffin! Meine Farmen waren schon gut, aber Sonic hat noch mehr rausgeholt. Nach dem Test mit 5 Farmen habe ich jetzt alle 15 ins VIP Management gegeben – so gut ist es. Der größte Unterschied: Es arbeiten nicht nur Bots, sondern echte Menschen.",
    author: "ALTAIR",
    image: "/images/man.jpg",
  },
  {
    text: "I've bought a castle skin and legion skin. Very happy with the service and very trustworthy",
    author: "Brandon",
    image: "/images/man.jpg",
  },
  ]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index.njk', { title: 'Sonic Store', active: 'home', reviews: reviews });
});
router.get('/about', function(req, res, next) {
  res.render('about.njk', { title: 'ABOUT', active: 'about' });
});
router.get('/managment', function(req, res, next) {
  res.render('managment.njk', { title: 'MANAGMENT', active: 'managment' });
});
router.get('/farms', function(req, res, next) {
  res.render('farms.njk', { title: 'Farms', active: 'farms' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact.njk', { title: 'CONTACT US', active: 'contact' });
});

router.get('/test', function(req, res, next) {
  main()
  res.send('ok');
});

export default router;
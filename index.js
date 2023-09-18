const express = require('express')
const app = express()
const port = 3000
const path = require('path');


app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/styles", express.static(path.join(__dirname, "styles")));
app.set('view engine', 'html');


//Allow all https src
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' https: unsafe-inline;");
  next();
})

let siteMap = [
  { "title": "Home", "hasDropdown": false, "link": "/" },
  {
    "title": "Services", "hasDropdown": true, "link": "#", "sublink": [
      { "title": "Get a quota", "link": "/pricing", "description": "Accessible, and financiable quotas." },
      { "title": "Projects", "link": "/projects", "description": "Over 200 projects, across Poland" },
    ]
  },
  { "title": "About us", "hasDropdown": false, "link": "/about-us", },
  { "title": "Gallery", "hasDropdown": true, "link": "/gallery", "sublink": [{ "title": "Photos", "link": "/gallery", "description": "Check our latest projects!" }] },
];

let carouselSlides = [
  { "photoPath": "/public/chicago.jpg", "photoDesc": "a nice photo 1", "description": "Compassionate partners for your pet's health journey. Our veterinary services merge cutting-edge medical care with heartfelt attention, ensuring your furry companions receive the best possible treatment for a vibrant life.", "id": 0, "author": "Sandra Okruszko", "enterprise": "Qvetka sp. Z.O.O" },
  { "photoPath": "/public/la.jpg", "photoDesc": "a nice photo 2", "description": "Crafting healthy smiles that leave a lasting impression. With a focus on precision and comfort, our dental care services prioritize your oral well-being, bringing out your confidence and brightest smile.", "id": 1, "author": "Anna Danilczuk", "enterprise": "Sloneczny Stok - Dental" },
  { "photoPath": "/public/ny.jpg", "photoDesc": "a nice photo 3", "description": "Envisioning tomorrow's connected world, today. We spearhead IoT development, fusing innovation with technology to create seamless solutions. Our expertise drives efficiency, automation, and transformation across industries, reshaping the future.", "id": 2, "author": "Francisco Molina", "enterprise": "TTPSC" },
];


let pricingPlans = [{
  "title": "Basic Land Survey Services", "description": "This is a basic plan", "price": 500.00, "items": [
    { "description": "Boundary Surveys", "path": "/public/icons8-fence-32.png" },
    { "description": "Topographic Surveys", "path": "/public/icons8-waypoint-map-32.png" },
    { "description": "Elevation Certificates", "path": "/public/icons8-height-32.png" },
  ]
},
{
  "title": "Construction Survey Services", "description": "This is a a medium plan", "price": 1200.00, "items": [
    { "description": "Site Layout Surveys", "path": "/public/icons8-prototype-32.png" },
    { "description": "Foundation Surveys", "path": "/public/icons8-foundation-32.png" },
    { "description": "As-Built Surveys", "path": "/public/icons8-structural-32.png" },
  ]
},
{
  "title": "Specialized Land Survey Services", "description": "This is an advanced plan", "price": 2000.00, "items": [
    { "description": "ALTA/NSPS Land Title Surveys", "path": "/public/icons8-compass-32.png" },
    { "description": "Subdivision Planning and Design", "path": "/public/icons8-foundation-32.png" },
    { "description": "Floodplain Mapping", "path": "/public/icons8-piping-32.png" },
  ]
},
{
  "title": "Specialized Land Survey Services", "description": "This is an advanced plan", "price": 2000.00, "items": [
    { "description": "ALTA/NSPS Land Title Surveys", "path": "/public/icons8-compass-32.png" },
    { "description": "Subdivision Planning and Design", "path": "/public/icons8-foundation-32.png" },
    { "description": "Floodplain Mapping", "path": "/public/icons8-piping-32.png" },
  ]
},

];

let services = [{
  "name": "Podział działki i nieruchomości",
  "description": "Proces geodezyjnego podziału działki i tworzenia dokumentacji operatu technicznego.",
  "link": "/service/1"
},
{
  "name": "Tyczenie budynków",
  "description": "Umiejscawianie budynków zgodnie z projektem i zezwoleniem.",
  "link": "/service/2"
},
{
  "name": "Wytyczenie i ustalenie granic nieruchomości",
  "description": "Uprawniony geodeta wytycza granice działki i przywraca punkty graniczne na podstawie istniejących dokumentów ewidencyjnych.",
  "link": "/service/3"
},
{
  "name": "Obsługa geodezyjna inwestycji budowlanych",
  "description": "Usługa geodezyjna w budownictwie obejmuje pomiary, wytyczanie i dokumentację.",
  "link": "/service/4"

},
{
  "name": "Prace geodezyjne na terenach kolejowych",
  "description": "Wykonywanie pomiarów geodezyjnych i tworzenie map kolejowych.",
  "link": "/service/5"

},
{
  "name": "Mapy do celów projektowych",
  "description": "Mapa do celów projektowych to kluczowa dokumentacja geodezyjna wymagana do uzyskania pozwolenia na budowę.",
  "link": "/service/6"

},
{
  "name": "Mapy 3D",
  "description": "Usługi związane z mapami 3D to modelowanie, wizualizacja i analiza przestrzeni.",
  "link": "/service/7"


},
];

app.get('/', (req, res) => {
  res.render('landing.html', { carouselSlides: carouselSlides, navBarOptions: siteMap, title: "Geodezja" });
});

app.get('/projects', (req, res) => {
  res.render('projects.html', { navBarOptions: siteMap, title: "Our projects" })
});

app.get('/pricing', (req, res) => {
  res.render('pricing.html', { navBarOptions: siteMap, title: "Pricing", pricingPlans: pricingPlans, services: services });

});

app.get('/gallery', (req, res) => {
  res.render('gallery.html', { navBarOptions: siteMap, title: "Our gallery" })
});

app.get('/contact', (req, res) => {
  res.render('contact.html', { navBarOptions: siteMap, title: "Contact us!" })
});

app.listen(port, null)
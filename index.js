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
  { "title": "About us", "hasDropdown": false, "link": "/link1" },
  {
    "title": "Services", "hasDropdown": true, "link": "/link2", "sublink": [
      { "title": "Experience", "link": "/link2/a", "description": "Over 200 projects, across Poland" },
      { "title": "Get a quota", "link": "/link2/a", "description": "Accessible, and financiable quotas." }
    ]
  },
  { "title": "Gallery", "hasDropdown": true, "link": "/link3", "sublink": [{ "title": "Photos", "link": "/link3/b", "description": "Check our latest projects!" }] },
  { "title": "Gallery", "hasDropdown": true, "link": "/link3", "sublink": [{ "title": "Photos", "link": "/link3/b", "description": "Check our latest projects!" }] },
  { "title": "Gallery", "hasDropdown": true, "link": "/link3", "sublink": [{ "title": "Photos", "link": "/link3/b", "description": "Check our latest projects!" }] }
];

let carouselSlides = [
  { "photoPath": "/public/chicago.jpg", "photoDesc": "a nice photo 1", "description": "Compassionate partners for your pet's health journey. Our veterinary services merge cutting-edge medical care with heartfelt attention, ensuring your furry companions receive the best possible treatment for a vibrant life.", "id": 0, "author": "Sandra Okruszko", "enterprise": "Qvetka sp. Z.O.O" },
  { "photoPath": "/public/la.jpg", "photoDesc": "a nice photo 2", "description": "Crafting healthy smiles that leave a lasting impression. With a focus on precision and comfort, our dental care services prioritize your oral well-being, bringing out your confidence and brightest smile.", "id": 1, "author": "Anna Danilczuk", "enterprise": "Sloneczny Stok - Dental" },
  { "photoPath": "/public/ny.jpg", "photoDesc": "a nice photo 3", "description": "Envisioning tomorrow's connected world, today. We spearhead IoT development, fusing innovation with technology to create seamless solutions. Our expertise drives efficiency, automation, and transformation across industries, reshaping the future.", "id": 2, "author": "Francisco Molina", "enterprise": "TTPSC" },
];

app.get('/', (req, res) => {
  res.render('landing.html', { carouselSlides: carouselSlides, navBarOptions: siteMap, title: "Hello" });
});

app.get('/test', (req, res) => {

  res.render('testing.html', { navBarOptions: siteMap, title: "Hello" })

});

app.listen(port, null)
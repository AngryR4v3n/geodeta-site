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
app.use((req, res, next)=> {
  res.setHeader('Content-Security-Policy', "script-src 'self' https: unsafe-inline;");
  next();
})

let siteMap = [
  { "title": "Link 1", "hasDropdown": false, "link": "/link1" },
  { "title": "Services", "hasDropdown": true, "link": "/link2", "sublink": [
    { "title": "Experience", "link": "/link2/a", "description": "Over 200 projects, across Poland" },
    { "title": "Get a quota", "link": "/link2/a", "description": "Accessible, and financiable quotas." }
  ] },
  { "title": "Gallery", "hasDropdown": true, "link": "/link3", "sublink": [{ "title": "Photos", "link": "/link3/b", "description": "Check our latest projects!" }] }
];
let carouselSlides = [
  {"photoPath": "/public/chicago.jpg", "photoDesc": "a nice photo 1", "description": "This is a test 1", "id": 0},
  {"photoPath": "/public/la.jpg" , "photoDesc": "a nice photo 2", "description": "This is a test 2", "id": 1},
  {"photoPath": "/public/ny.jpg" , "photoDesc": "a nice photo 3", "description": "This is a test 3", "id": 2},
];
app.get('/', (req, res) => {  
  res.render('landing.html', {carouselSlides: carouselSlides, navBarOptions: siteMap, title: "Hello"});
});

app.get('/test', (req, res) => {

  res.render('testing.html', { navBarOptions: siteMap, title: "Hello" })

});

app.listen(port, null)
const express = require('express')
const app = express()
const PORT = process.env.NODE_PORT || 3000
const path = require('path');
const siteInfo = require("./siteInfo/siteInfo.js")
const favicon = require('serve-favicon');

app.use(favicon(__dirname + "/public/favicon.ico"));
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/styles", express.static(path.join(__dirname, "styles")));
app.set('view engine', 'html');
console.log(`Working on :${__dirname}`)

//Allow all https src
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' https: unsafe-inline;");
  next();
})

app.use((req, res, next) => {
  // This reads the accept-language header
  // and returns the language if found or false if not
  const lang = req.acceptsLanguages('pl', 'en')

  if (lang) { // if found, attach it as property to the request
    req.lang = lang
  } else { // else set the default language
    req.lang = 'en'
  }

  next()
})

app.get('/', (req, res) => {
  res.render('landing.html', {
    carouselSlides: siteInfo.carouselSlides[req.lang],
    navBarOptions: siteInfo.siteMap[req.lang],
    title: siteInfo.webTitles[req.lang].main,
    text: siteInfo.landing[req.lang],
    header: siteInfo.header[req.lang],
    footer: siteInfo.footer[req.lang]
  });

});

app.get('/services', (req, res) => {
  res.render('services.html', {
    title: siteInfo.webTitles[req.lang].services,
    header: siteInfo.header[req.lang],
    navBarOptions: siteInfo.siteMap[req.lang],
    footer: siteInfo.footer[req.lang],
    text: siteInfo.projects[req.lang]
  })
});

app.get('/pricing', (req, res) => {
  res.render('pricing.html', {
    title: siteInfo.webTitles[req.lang].pricing,
    navBarOptions: siteInfo.siteMap[req.lang],
    pricingDesc: siteInfo.pricing[req.lang].pricingDesc,
    services: siteInfo.services[req.lang], // check the siteInfo.js 
    header: siteInfo.header[req.lang],
    footer: siteInfo.footer[req.lang],
    text: siteInfo.pricing[req.lang]

  });

});

app.get('/gallery', (req, res) => {
  res.render('gallery.html', {
    navBarOptions: siteInfo.siteMap[req.lang],
    title: siteInfo.webTitles[req.lang].gallery,
    text: siteInfo.gallery[req.lang],
    photos: siteInfo.gallery[req.lang].photos,
    header: siteInfo.header[req.lang],
    footer: siteInfo.footer[req.lang],
  })
});

app.get('/contact', (req, res) => {
  res.render('contact.html', {
    navBarOptions: siteInfo.siteMap[req.lang],
    title: siteInfo.webTitles[req.lang].contactUs,
    text: siteInfo.contactUs[req.lang],
    header: siteInfo.header[req.lang],
    footer: siteInfo.footer[req.lang],

  })
});

app.get('/service/:id', (req, res) => {
  let text = siteInfo.services[req.lang].moreInfo[req.params.id]
  res.render('serviceInfo.html', {
    navBarOptions: siteInfo.siteMap[req.lang],
    title: "",
    text: text,
    header: siteInfo.header[req.lang],
    footer: siteInfo.footer[req.lang]
  })
});

app.get("/aboutus", (req, res) => {
  res.render('about.html', {
    navBarOptions: siteInfo.siteMap[req.lang],
    title: siteInfo.webTitles[req.lang].aboutus,
    text: siteInfo.aboutUs[req.lang],
    header: siteInfo.header[req.lang],
    footer: siteInfo.footer[req.lang]
  })
});

app.get("/healthz", (req, res) => {
  res.status(200).send({ uptime: process.uptime(), message: "OK", timestamp: Date.now() })
})
console.log(`Node up in port ${PORT}`)
app.listen(PORT, null)
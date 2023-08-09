const express = require('express')
const app = express()
const port = 3000
const path = require('path');


app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/styles", express.static(path.join(__dirname, "styles")));
app.set('view engine', 'html');


app.get('/', (req, res) => {
  let siteMap = [
    { "title": "Link 1", "hasDropdown": false, "link": "/link1" },
    { "title": "Services", "hasDropdown": true, "link": "/link2", "sublink": [
      { "title": "Experience", "link": "/link2/a", "description": "Over 200 projects, across Poland" },
      { "title": "Get a quota", "link": "/link2/a", "description": "Accessible, and financiable quotas." }
    ] },
    { "title": "Gallery", "hasDropdown": true, "link": "/link3", "sublink": [{ "title": "Photos", "link": "/link3/b", "description": "Check our latest projects!" }] }
  ];
  res.render('body', { navBarOptions: siteMap, title: "Hello" });
})

app.listen(port, null)
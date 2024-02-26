const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const restaurants = require("./public/data/restaurant.json").results;

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/restaurants", (req, res) => {
  const keyword = req.query.keyword?.trim();
  const matchedRestaurant = keyword
    ? restaurants.filter((mv) => {
        const { name, category } = mv;
        const isName = name.toLowerCase().includes(keyword.toLowerCase());
        const isCategory = category
          .toLowerCase()
          .includes(keyword.toLowerCase());

        return isName || isCategory;
      })
    : restaurants;
  res.render("index", { restaurants: matchedRestaurant, keyword });
});

app.get("/restaurants/:id", (req, res) => {
  const id = req.params.id;
  const restaurant = restaurants.find((mv) => mv.id.toString() === id);
  res.render("detail", { restaurant });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

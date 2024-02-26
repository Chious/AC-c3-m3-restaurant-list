const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const movies = require("./public/data/movies.json").results;
const BASE_IMG_URL = "https://movie-list.alphacamp.io/posters/";

const restaurants = require("./public/data/restaurant.json").results;

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/movies", (req, res) => {
  const keyword = req.query.search?.trim();
  const matchedMovies = keyword
    ? movies.filter((mv) =>
        Object.values(mv).some((property) => {
          if (typeof property === "string") {
            return property.toLowerCase().includes(keyword.toLowerCase());
          }
          return false;
        })
      )
    : movies;
  res.render("index", { movies: matchedMovies, BASE_IMG_URL, keyword });
});

app.get("/restaurants/:id", (req, res) => {
  const id = req.params.id;
  const restaurant = restaurants.find((mv) => mv.id.toString() === id);
  res.render("detail", { restaurant, BASE_IMG_URL });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const userRoute = require("./routes/userRoute.js");
const productRoute = require("./routes/productRoute.js");
const PORT = 5555;

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(
  "/assets/images",
  express.static(path.join(__dirname, "assets/images"))
);


app.set('view engine', 'ejs');

mongoose.connect("mongodb://127.0.0.1:27017/funky-store", { 
  }).then(() => {
    console.log("MongoDB DataBase Connected Successfully!!");
  }).catch((error) => console.log(error));


  app.get('/', function(req, res) {
    var mascots = [
      { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
      { name: 'Tux', organization: "Linux", birth_year: 1996},
      { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
    res.render('pages/index',{
      mascots: mascots,
      tagline: tagline
    });
  });


// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

// https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
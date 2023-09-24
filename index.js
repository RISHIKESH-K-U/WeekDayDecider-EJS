import express from "express";

const app = express();
const day = Math.floor(Math.random() * 7);

let dt = "a weekday";
let adv = "word hard";

if (day == 0 || day == 6) {
  dt = "a weekend";
  adv = "Enjoy";
}

app.get("/", (req, res) => {
  res.render("index.ejs", { daytype: dt, advice: adv });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log(day);
});

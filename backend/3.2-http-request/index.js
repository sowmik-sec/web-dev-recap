import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hey there");
});

app.get("/about", (req, res) => {
  res.send("<h1>This planet is called Earth</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<p>Habibi come to this earth</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
